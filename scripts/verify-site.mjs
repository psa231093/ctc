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
    assert.match(document, /CHICAGO CALISTHENICS/);
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
assert.match(robots, /Disallow: \//);
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const path of paths)
  assert.ok(sitemap.includes("https://www.chicagotrainingclub.com" + path));
assert.equal((await fetch(base + "/definitely-not-a-page")).status, 404);
console.log(
  `PASS ${assets.size + 4} assets, preview crawl guard, 5 sitemap URLs and genuine 404`,
);
