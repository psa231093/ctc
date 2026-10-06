import {
  Arrow,
  ButtonLink,
  JoinBanner,
  Label,
  Photo,
  Star,
} from "@/components/ctc-ui";
import { TrainingSelector } from "@/components/training-selector";
import { Gallery } from "@/components/gallery";
import { club, pageMetadata } from "@/lib/ctc";
export const metadata = pageMetadata(
  "Chicago Calisthenics & Community",
  "Chicago Training Club is a calisthenics community for all levels. Explore open training, handstand clinics and skill sessions in Chicago. Membership is free.",
);
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "@id": club.url + "/#organization",
    name: club.name,
    alternateName: "CTC",
    url: club.url,
    logo: club.url + "/ctc-wordmark.svg",
    description:
      "A Chicago calisthenics club bringing people together through open training, handstand clinics and skill practice.",
    sport: "Calisthenics",
    location: { "@type": "City", name: "Chicago" },
    sameAs: [club.instagram, club.tiktok],
  };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero section-pad" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <h1 id="hero-heading">
            <span className="hero-eyebrow mono">
              <span className="status-dot" />
              CHICAGO CALISTHENICS. ALL LEVELS.
            </span>
            <span className="hero-title">
              BUILT BY
              <br />
              SHOWING
              <br />
              <span className="last-line">
                UP.
                <Star />
              </span>
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              A city. A set of bars. A shared obsession.
              <br />
              We’re Chicago Training Club.
              <br />
              Come find out what you’re capable of.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/join">Find your people</ButtonLink>
              <a href="#training" className="text-link">
                Find your practice <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <Photo
            name="chicago-handstands"
            alt="Two Chicago Training Club athletes practicing handstands at the lakefront with the city skyline behind them"
            priority
            sizes="(max-width: 700px) 100vw, 50vw"
          />
          <div className="photo-corner mono">
            OUTSIDE THE ORDINARY.
            <br />
            CHICAGO, ILLINOIS.
          </div>
          <div className="hero-sticker">
            <span>ALL LEVELS.</span>
            <span>ONE CLUB.</span>
            <Arrow diagonal />
          </div>
          <div className="hero-photo-bottom mono">
            <span>THE CITY IS OUR TRAINING GROUND.</span>
            <span>01 / CTC</span>
          </div>
        </div>
      </section>
      <div className="club-ribbon">
        <span>NO EGO. JUST EFFORT.</span>
        <Star />
        <span>ALL ROADS LEAD TO CHICAGO.</span>
        <Star />
        <span>STRONGER, TOGETHER.</span>
        <Star />
      </div>
      <section
        className="manifesto section-pad"
        aria-labelledby="manifesto-heading"
      >
        <div className="manifesto-aside">
          <Label number="01">The club</Label>
          <figure data-reveal>
            <Photo
              name="club-culture"
              alt="CTC members sharing a training session on the outdoor bars"
              sizes="(max-width: 700px) 70vw, 25vw"
            />
            <figcaption className="mono tiny">
              BUILT IN THE PARK. CARRIED INTO LIFE.
            </figcaption>
          </figure>
        </div>
        <div className="manifesto-copy" data-reveal>
          <h2 id="manifesto-heading">
            MORE THAN
            <br />A WORKOUT.
            <br />
            <span>
              A WAY TO
              <br className="mobile-break" /> SHOW UP.
            </span>
          </h2>
          <div className="manifesto-body">
            <p>
              CTC started with three founders crossing paths in a Chicago park.
              A conversation between sets became shared sessions—and a community
              built on effort, respect, and the will to keep learning.
            </p>
            <p>
              Your first handstand or your next breakthrough. Wherever you’re
              starting, you belong here.
            </p>
            <a className="text-link" href="/the-club">
              Meet Chicago Training Club <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <section
        id="training"
        className="training-section section-pad"
        aria-labelledby="training-heading"
      >
        <div className="section-heading" data-reveal>
          <div>
            <Label number="02">The practice</Label>
            <h2 id="training-heading">
              SAME BARS.
              <br />
              NEW POSSIBILITIES.
            </h2>
          </div>
          <p>
            Build strength. Find balance.
            <br />
            Keep a beginner’s curiosity.
            <br />
            This is calisthenics, the CTC way.
          </p>
        </div>
        <TrainingSelector />
      </section>
      <section
        className="community-section"
        aria-labelledby="community-heading"
      >
        <div className="section-heading section-pad" data-reveal>
          <div>
            <Label number="03">The people</Label>
            <h2 id="community-heading">
              STRONG INDIVIDUALS.
              <br />
              <span className="outline-text">STRONGER TOGETHER.</span>
            </h2>
          </div>
          <a className="text-link" href="/community">
            Inside the club <Arrow diagonal />
          </a>
        </div>
        <Gallery />
      </section>
      <JoinBanner />
    </main>
  );
}
