import { ButtonLink, Label, Photo, Star } from "@/components/ctc-ui";
import { club, pageMetadata } from "@/lib/ctc";
import { FaqAccordion } from "@/components/faq-accordion";
export const metadata = pageMetadata(
  "Join CTC — Calisthenics in Chicago for All Levels",
  "Join Chicago Training Club. Membership is free and all skill levels are welcome. Find current session details and answers for your first CTC training session.",
  "/join",
);
export default function JoinPage() {
  return (
    <main id="main">
      <section className="join-page-hero section-pad">
        <div>
          <Label>Your next rep starts here</Label>
          <h1>
            YOU BRING
            <br />
            THE EFFORT.
            <br />
            WE BRING
            <br />
            THE PEOPLE.
          </h1>
          <p>
            New to calisthenics? New to Chicago? Just looking for people who get
            it? You have a place at Chicago Training Club.
          </p>
          <ButtonLink href={club.instagram} external>
            Find the next session
          </ButtonLink>
          <p className="join-note">
            Visit @chicagotrainingclub on Instagram for current session
            information, or send the club a message to plan your first visit.
          </p>
        </div>
        <div className="join-page-visual">
          <Photo
            name="bar-work"
            alt="A smiling CTC athlete at the Chicago outdoor calisthenics bars"
            priority
          />
          <div className="membership-tag">FREE TO JOIN. ALL LEVELS.</div>
        </div>
      </section>
      <section
        className="steps section-pad"
        aria-label="How to start training with CTC"
      >
        <div>
          <span className="mono">01</span>
          <h2>FIND YOUR SESSION.</h2>
          <p>
            Check the club’s Instagram for details. Confirm the time, location,
            and any session cost before heading out.
          </p>
        </div>
        <div>
          <span className="mono">02</span>
          <h2>COME READY TO MOVE.</h2>
          <p>
            Bring water and your curiosity. Message the club about any equipment
            or access questions.
          </p>
        </div>
        <div>
          <span className="mono">03</span>
          <h2>MAKE YOURSELF AT HOME.</h2>
          <p>
            Introduce yourself, meet the people, and start where you are.
            Membership is free; commitment is what connects us.
          </p>
        </div>
      </section>
      <section className="faq-section section-pad" id="questions">
        <div>
          <Label>Good questions</Label>
          <h2>
            BEFORE
            <br />
            YOU SHOW UP.
          </h2>
          <Star className="faq-star" />
        </div>
        <FaqAccordion />
      </section>
    </main>
  );
}
