import { ButtonLink, Label, Photo, Star } from "@/components/ctc-ui";
import { club, pageMetadata } from "@/lib/ctc";
import { FaqAccordion } from "@/components/faq-accordion";
export const metadata = pageMetadata(
  "Join CTC — Calisthenics in Chicago for All Levels",
  "Join Chicago Training Club. Membership is free and all skill levels are welcome. Find current session details and answers for your first CTC training session.",
  "/join",
);
const weeklySessions = [
  { day: "Sundays", place: "Oak Street Beach", time: "12:00 pm – 3:00 pm", address: "1000 N Lake Shore Dr", mapQuery: "Oak Street Beach, 1000 N Lake Shore Dr, Chicago, IL" },
  { day: "Wednesdays", place: "Lake Shore Park", time: "6:00 pm – 8:00 pm", address: "808 N Lake Shore Dr", mapQuery: "Lake Shore Park, 808 N Lake Shore Dr, Chicago, IL" },
];
export default function JoinPage() {
  return (
    <main id="main">
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
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
          <ButtonLink href="#weekly-training">
            See the weekly sessions
          </ButtonLink>
          <p className="join-note">
            Visit @chicagotrainingclub on Instagram for current session
            information, or send the club a message to plan your first visit.
          </p>
        </div>
        <div className="join-page-visual" data-kinetic>
          <Photo
            name="bar-work"
            alt="A smiling CTC athlete at the Chicago outdoor calisthenics bars"
            priority
          />
          <div className="membership-tag">FREE TO JOIN. ALL LEVELS.</div>
        </div>
      </section>
      <section className="weekly-training section-pad" id="weekly-training" aria-labelledby="weekly-heading">
        <div className="weekly-heading">
          <Label>Two places to show up</Label>
          <h2 id="weekly-heading">YOUR WEEK.<br />AT THE BARS.</h2>
          <p>Warm up, work on your skills, and train together. All times are local to Chicago.</p>
        </div>
        <div className="weekly-grid">
          {weeklySessions.map(session => (
            <article className="weekly-session" key={session.day}>
              <div className="weekly-session-copy">
                <span className="mono weekly-day">{session.day}</span>
                <h3>{session.place}</h3>
                <p className="weekly-time">{session.time}</p>
                <p className="weekly-plan">Warm up &amp; skills <span aria-hidden="true">/</span> Workout circuit</p>
                <address>{session.address}<br />Chicago, IL</address>
                <a className="text-link" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(session.mapQuery)}`} target="_blank" rel="noopener noreferrer">Get directions<span className="sr-only"> to {session.place} (Google Maps, opens in a new tab)</span></a>
              </div>
              <iframe title={`Google Map: ${session.place}`} src={`https://www.google.com/maps?q=${encodeURIComponent(session.mapQuery)}&output=embed`} loading="eager" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </article>
          ))}
        </div>
        <p className="weekly-updates">Check <a href={club.instagram} target="_blank" rel="noopener noreferrer">@chicagotrainingclub<span className="sr-only"> (opens in a new tab)</span></a> on Instagram for session updates before heading out.</p>
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
