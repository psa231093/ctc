import { club } from "@/lib/ctc";
export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-7-7 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`chicago-star ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="M50 0 61 31 93.3 25 72 50 93.3 75 61 69 50 100 39 69 6.7 75 28 50 6.7 25 39 31Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function Photo({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <img
      className={`photo ${className}`}
      src={`/images/${name}-900.webp`}
      srcSet={[480, 900, 1440]
        .map((w) => `/images/${name}-${w}.webp ${w}w`)
        .join(", ")}
      sizes={sizes}
      alt={alt}
      width="1440"
      height="1800"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function ButtonLink({
  children,
  href,
  light = false,
  external = false,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`button ${light ? "button-light" : ""} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Arrow diagonal={external} />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
export function Label({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <div className="section-label">
      <span>{number ? `[ ${number} ]` : <Star />}</span>
      {children}
    </div>
  );
}
export function JoinBanner() {
  return (
    <section className="join-banner section-pad" aria-labelledby="join-heading">
      <div className="join-top">
        <Label>Come as you are. Put in the work.</Label>
        <span className="mono">CHICAGO, IL</span>
      </div>
      <div className="join-main" data-reveal>
        <h2 id="join-heading">
          MEET US
          <br />
          AT THE BARS.
        </h2>
        <div className="join-copy">
          <Star />
          <p>
            There’s a place for you at the bars.
            <br />
            Let’s find your first session.
          </p>
          <ButtonLink href="/join">Come train with us</ButtonLink>
          <span className="mono tiny">FREE MEMBERSHIP. SHARED COMMITMENT.</span>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <a href="/" aria-label="Chicago Training Club home">
          <img
            src="/ctc-wordmark.svg"
            alt="Chicago Training Club"
            width="250"
            height="47"
          />
        </a>
        <p>Calisthenics. Community. Chicago.</p>
        <a className="text-link" href="#top">
          Back to top
        </a>
      </div>
      <nav className="footer-navigation" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/the-club">The club</a>
        <a href="/chicago-calisthenics">The training</a>
        <a href="/community">The people</a>
        <a href="/join">Train with us</a>
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Chicago Training Club</span>
        <div>
          <a href={club.store} target="_blank" rel="noopener noreferrer">
            Shop<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={club.instagram} target="_blank" rel="noopener noreferrer">
            Instagram<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={club.tiktok} target="_blank" rel="noopener noreferrer">
            TikTok<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="/join">Get in touch</a>
        </div>
        <span className="footer-stars" aria-label="Made for Chicago">
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
      </div>
    </footer>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <section className="page-intro section-pad">
      <a className="breadcrumb mono" href="/">
        CTC / HOME
      </a>
      <Label>{eyebrow}</Label>
      <h1 data-reveal>{title}</h1>
      <p className="intro-description">{text}</p>
    </section>
  );
}
