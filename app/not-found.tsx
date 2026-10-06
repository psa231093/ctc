import { ButtonLink, Label } from "@/components/ctc-ui";
export default function NotFound() {
  return (
    <main id="main" className="not-found section-pad">
      <Label>404 / A little off balance</Label>
      <h1>
        LET’S FIND
        <br />
        YOUR FOOTING.
      </h1>
      <p>That page isn’t here. The club is.</p>
      <ButtonLink href="/">Back to Chicago Training Club</ButtonLink>
    </main>
  );
}
