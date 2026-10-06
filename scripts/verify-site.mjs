import assert from "node:assert/strict";

const base = process.env.TEST_ORIGIN || "http://127.0.0.1:5173";
const paths = [
  "/",
  "/the-club",
  "/chicago-calisthenics",
  "/community",
  "/join",
];
const titles = new Set();
const assets = new Set();
for (const path of paths) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  // Check rendered HTML, excluding hydration payloads and scripts.
  const document = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  const title = document.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${path}`);
  titles.add(title);
  assert.equal(
    (document.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `One H1: ${path}`,
  );
  assert.match(document, /<main[^>]*id="main"/);
  const canonical = document.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(
    new URL(canonical).href,
    new URL("https://www.chicagotrainingclub.com" + path).href,
    `Canonical: ${path}`,
  );
  assert.match(document, /name="description"[^>]+content="[^"]{60,}"/);
  assert.match(document, /name="robots"[^>]+content="noindex, nofollow"/);
  assert.ok(!document.includes("Starter Project"));
  for (const tag of document.matchAll(/<img\b[^>]*>/g)) {
    assert.match(tag[0], /alt="[^"]+"/);
    assert.match(tag[0], /width="\d+"/);
    assert.match(tag[0], /height="\d+"/);
    const src = tag[0].match(/src="([^"]+)"/)?.[1];
    if (src?.startsWith("/")) assets.add(src);
  }
  if (path === "/") {
    const schema = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
    );
    assert.equal(schema["@type"], "SportsOrganization");
    assert.equal(schema.location.name, "Chicago");
    assert.match(document, /CHICAGO’S LARGEST CALISTHENICS COMMUNITY/);
    assert.match(document, /RAISE THE/);
    assert.ok(!document.match(/<h1[\s\S]*?<\/h1>/)?.[0].includes("chicago-star"));
    assert.match(document, /one-arm-handstand-/);
    const film = document.match(/<video\b[^>]*>/)?.[0];
    assert.ok(film, "Club film is rendered");
    assert.match(film, /preload="none"/);
    assert.ok(!/\ssrc=/.test(film), "Film bytes deferred until visibility or user play");
    for (const handle of ["research-hoodie", "training-pant", "ctc-trinity-system-chalk-tee"])
      assert.ok(document.includes(`https://f01e77-28.myshopify.com/products/${handle}`));
    assert.ok(!document.match(/<header[\s\S]*?<\/header>/)?.[0].includes("CHICAGO BUILT"));
    assert.equal((document.match(/<video\b/g) || []).length, 2, "Both homepage films render");
    assert.ok([...document.matchAll(/<video\b[^>]*>/g)].every(([tag]) => !/\ssrc=/.test(tag)), "No initial video downloads");
    assert.match(document, /sunday-heading/);
    for (const id of ["DPy6hq6jWiE", "DMsubtnOg4j", "DdRb5d9jvuw", "DZaUQ0NjugP"])
      assert.ok(document.includes(`https://www.instagram.com/p/${id}/?img_index=1`));
    assert.equal((document.match(/class="instagram-post"/g) || []).length, 4);
  }
  console.log(
    `PASS ${path}: server HTML, title, H1, canonical, metadata, image attributes`,
  );
}
for (const asset of [
  ...assets,
  "/fonts/barlow-condensed-bold.woff2",
  "/fonts/dm-sans.woff2",
  "/images/social-cover.jpg",
  "/favicon.svg",
]) {
  assert.equal((await fetch(base + asset)).status, 200, `Asset: ${asset}`);
}
const robots = await (await fetch(base + "/robots.txt")).text();
for (const size of [720, 1280]) {
  const response = await fetch(`${base}/video/ctc-film-${size}.mp4`, {headers: {Range: "bytes=0-1023"}});
  assert.ok([200, 206].includes(response.status), "Film is served successfully");
  assert.match(response.headers.get("content-type"), /video\/mp4/);
  const bytes = (await response.arrayBuffer()).byteLength;
  assert.ok(response.status === 206 ? bytes === 1024 : bytes > 1000000);
}
assert.equal((await fetch(base + "/video/sunday-at-oak-street.mp4", {method:"HEAD"})).status, 200);
assert.match(robots, /Disallow: \//);
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const path of paths)
  assert.ok(sitemap.includes("https://www.chicagotrainingclub.com" + path));
assert.equal((await fetch(base + "/definitely-not-a-page")).status, 404);
console.log(
  `PASS ${assets.size + 4} assets, preview crawl guard, 5 sitemap URLs and genuine 404`,
);
