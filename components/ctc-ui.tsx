import { club } from "@/lib/ctc";
import imageDimensions from "@/lib/image-dimensions.json";
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
export function Photo({ name, alt, className = "", priority = false, sizes = "(max-width: 700px) 100vw, 50vw", mobile }: {
  name: string; alt: string; className?: string; priority?: boolean; sizes?: string;
  mobile?: { name: string; widths?: number[] };
}) {
  const dimensions = imageDimensions[name as keyof typeof imageDimensions];
  const srcset = (asset: string, widths: number[], format: string) => widths.map(width => `/images/${asset}-${width}.${format} ${width}w`).join(", ");
  return (
    <picture className="responsive-photo">
      {mobile && <source media="(max-width: 700px)" type="image/avif" srcSet={srcset(mobile.name, mobile.widths || [480, 900, 1440], "avif")} sizes={sizes} />}
      {mobile && <source media="(max-width: 700px)" type="image/webp" srcSet={srcset(mobile.name, mobile.widths || [480, 900, 1440], "webp")} sizes={sizes} />}
      <source type="image/avif" srcSet={srcset(name, [480, 640, 720, 900, 1440], "avif")} sizes={sizes} />
      <img className={`photo ${className}`} src={`/images/${name}-900.webp`} srcSet={srcset(name, [480, 900, 1440], "webp")} sizes={sizes} alt={alt} width={dimensions?.width || 1440} height={dimensions?.height || 1800} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    </picture>
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
  icon,
}: {
  children: React.ReactNode;
  number?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{icon ?? (number ? `[ ${number} ]` : <Star />)}</span>
      {children}
    </div>
  );
}
export function JoinBanner() {
  return (
    <section className="join-banner section-pad" aria-labelledby="join-heading">
      <div className="join-top">
        <Label icon={<svg className="bicep-icon" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><path d="M17 6c-3 0-5 2-5 5v5c0 2 1 4 3 5l5 2 4-7-4-3V9c0-2-1-3-3-3Zm8 11-8 15c-2 4-3 7-2 11l-7-3-3 10c10 8 22 12 34 9 13-3 22-12 21-22-1-8-7-13-14-13-6 0-11 3-14 8l-7-15Zm-2 28c4-8 10-12 16-10 2 1 4 3 4 5-8-2-14 1-20 5Z" /></svg>}>Come as you are. Put in the work.</Label>
        <span className="mono">CHICAGO, IL</span>
      </div>
      <div className="join-main" data-reveal>
        <h2 id="join-heading">
          MEET US
          <br />
          AT THE BARS.
        </h2>
        <div className="join-copy" data-kinetic>
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
        <span className="footer-stars" role="img" aria-label="Made for Chicago">
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
      </div>
    </footer>
  );
}
export function DesktopPhoto({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  const dimensions = imageDimensions[name as keyof typeof imageDimensions];
  return <picture>
    <source media="(min-width: 901px)" type="image/avif" srcSet={[480, 640, 720, 900, 1440].map(width => `/images/${name}-${width}.avif ${width}w`).join(", ")} sizes="(min-width: 1600px) 540px, 40vw" />
    <source media="(min-width: 901px)" srcSet={[480, 900, 1440].map(width => `/images/${name}-${width}.webp ${width}w`).join(", ")} sizes="(min-width: 1600px) 540px, 40vw" />
    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'/%3E" width={dimensions?.width || 1440} height={dimensions?.height || 1800} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
  </picture>;
}
export function PageIntro({ eyebrow, title, text, image, caption, action }: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: { name: string; alt: string };
  caption: string;
  action: { href: string; label: string };
}) {
  return (
    <section className="page-intro page-intro-editorial section-pad">
      <div className="intro-copy">
        <a className="breadcrumb mono" href="/">CTC / HOME</a>
        <Label>{eyebrow}</Label>
        <h1 data-reveal>{title}</h1>
        <p className="intro-description">{text}</p>
        <a className="text-link intro-action" href={action.href}>{action.label}<Arrow /></a>
      </div>
      <figure className="intro-portrait">
        <DesktopPhoto name={image.name} alt={image.alt} priority />
        <figcaption><span className="mono">CHICAGO TRAINING CLUB</span><span>{caption}</span></figcaption>
      </figure>
    </section>
  );
}
