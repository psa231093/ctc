import {
  Arrow,
  DesktopPhoto,
  JoinBanner,
  Label,
  PageIntro,
  Photo,
} from "@/components/ctc-ui";
import { pageMetadata } from "@/lib/ctc";
export const metadata = pageMetadata(
  "The Club — Calisthenics, Community & Chicago",
  "Meet Chicago Training Club. From a chance meeting in a park to a calisthenics community built on shared effort, mutual respect and free membership.",
  "/the-club",
);
export default function ClubPage() {
  return (
    <main id="main">
      <PageIntro
        image={{ name: "club-desktop", alt: "A CTC athlete holding a handstand on parallel bars with Chicago buildings behind them" }}
        caption="A shared place. A shared purpose."
        action={{ href: "#our-story", label: "How it started" }}
        eyebrow="01 / Our story"
        title={
          <>
            A CHANCE MEETING.
            <br />A SHARED PURPOSE.
          </>
        }
        text="Chicago Training Club began in a park. What keeps it growing is the people who come back—and make room for someone new."
      />
      <div className="story-hero" id="club-photo">
        <Photo
          name="club-session"
          mobile={{ name: "club-group-mobile", widths: [480, 768] }}
          alt="Chicago Training Club members together at the outdoor beach training bars"
          sizes="(max-width: 700px) 100vw, 80vw"
        />
        <span className="story-photo-label mono">CHICAGO TRAINING CLUB<br />A SHARED PLACE. A SHARED PURPOSE.</span>
        <div className="story-overlay">
          <p>
            THE BEST THING WE BUILD
            <br />
            IS EACH OTHER.
          </p>
        </div>
      </div>
      <section className="story-block section-pad" id="our-story">
        <figure className="story-portrait">
          <DesktopPhoto name="club-session" alt="CTC members training together on red bars at the beach, with the full group and skyline visible" />
          <figcaption className="mono">THE BEST THING WE BUILD IS EACH OTHER.</figcaption>
        </figure>
        <div>
          <Label>The beginning</Label>
          <h2 style={{ marginTop: 25 }}>
            SAME PARK.
            <br />
            SAME TIME.
          </h2>
        </div>
        <div className="story-prose" data-reveal>
          <p>
            Three founders. Different reasons for being there. One conversation
            between sets that kept going.
          </p>
          <p>
            That first connection grew into regular training together, then into
            sharing what they knew with others. CTC took shape around a simple
            belief: a strong community makes space for people who are willing to
            put in the effort.
          </p>
          <p>
            Today, the club brings calisthenics into Chicago’s public spaces and
            local gyms. Beginners and experienced athletes share the same
            ground, each working on their own next step.
          </p>
          <a className="text-link" href="/chicago-calisthenics">
            Explore how we train <Arrow diagonal />
          </a>
        </div>
      </section>
      <section className="values section-pad">
        <Label number="CTC">What we stand for</Label>
        <div className="value-row" data-reveal>
          <span className="mono">01</span>
          <h3>Effort over ego.</h3>
          <p>
            Bring commitment, give respect, and leave room to learn from the
            person next to you.
          </p>
        </div>
        <div className="value-row" data-reveal>
          <span className="mono">02</span>
          <h3>Your own progress.</h3>
          <p>
            Your starting point belongs to you. So does the work that takes you
            to your next milestone.
          </p>
        </div>
        <div className="value-row" data-reveal>
          <span className="mono">03</span>
          <h3>Strength beyond the bars.</h3>
          <p>
            CTC’s mission reaches beyond physical skills: build people, connect
            communities, and make discipline a shared practice.
          </p>
        </div>
      </section>
      <JoinBanner />
    </main>
  );
}
