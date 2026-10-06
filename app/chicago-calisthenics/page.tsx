import {
  ButtonLink,
  JoinBanner,
  Label,
  PageIntro,
  Photo,
} from "@/components/ctc-ui";
import { pageMetadata, programs } from "@/lib/ctc";
export const metadata = pageMetadata(
  "Chicago Calisthenics Training & Handstand Clinics",
  "Explore Chicago calisthenics with CTC: open training sessions, handstand clinics, front lever and planche practice. All skill levels are welcome.",
  "/chicago-calisthenics",
);
export default function TrainingPage() {
  return (
    <main id="main">
      <PageIntro
        image={{ name: "training-hero", alt: "A CTC athlete hanging from a red calisthenics bar with Chicago buildings behind her" }}
        caption="Strength. Balance. Your next step."
        action={{ href: "#sessions", label: "Explore the training" }}
        eyebrow="02 / Find your practice"
        title={
          <>
            CHICAGO
            <br />
            CALISTHENICS.
          </>
        }
        text="Your body is the starting point. Your community helps you keep going. Explore the training that brings Chicago Training Club together."
      />
      {programs.map((program) => (
        <section
          className="program-detail section-pad"
          key={program.id}
          id={program.id}
        >
          <div className="program-detail-image">
            <Photo
              name={program.image}
              mobile={program.id === "research" ? { name: "breakthrough-mobile" } : undefined}
              alt={program.id === "research" ? "A CTC athlete practicing calisthenics on red outdoor bars" : program.alt}
              priority={program.number === "01"}
            />
          </div>
          <div className="program-detail-copy" data-reveal>
            <Label number={program.number}>{program.label}</Label>
            <h2>{program.title.toUpperCase()}</h2>
            <p>{program.text}</p>
            <span className="mono">{program.detail.toUpperCase()}</span>
            <ButtonLink href="/join">Find a session</ButtonLink>
          </div>
        </section>
      ))}
      <section className="training-guide section-pad">
        <div>
          <Label>New to the bars?</Label>
          <h2 style={{ marginTop: 25 }}>
            YOU CAN
            <br />
            START HERE.
          </h2>
        </div>
        <div>
          <p>
            Calisthenics uses your body weight to explore strength, balance, and
            control. At CTC, that practice is shared—from the first attempts at
            a handstand to more demanding skills like the front lever and
            planche.
          </p>
          <p>
            You don’t need to arrive with an advanced skill. CTC welcomes
            different experience levels and encourages learning together. Bring
            water, introduce yourself, and give yourself room to practice.
          </p>
          <ButtonLink href="/join#questions" light>
            Your first-session questions
          </ButtonLink>
        </div>
      </section>
      <JoinBanner />
    </main>
  );
}
