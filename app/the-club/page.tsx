import {
  Arrow,
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
        eyebrow="01 / Our story"
        title={
          <>
            A CHANCE MEETING.
            <br />A SHARED PURPOSE.
          </>
        }
        text="Chicago Training Club began in a park. What keeps it growing is the people who come back—and make room for someone new."
      />
      <div className="story-hero">
        <Photo
          name="club-session"
          alt="Chicago Training Club members practicing together around outdoor training bars"
          priority
          sizes="100vw"
        />
        <div className="story-overlay">
          <p>
            THE BEST THING WE BUILD
            <br />
            IS EACH OTHER.
          </p>
        </div>
      </div>
      <section className="story-block section-pad">
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
