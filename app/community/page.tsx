import { ButtonLink, JoinBanner, PageIntro } from "@/components/ctc-ui";
import { Gallery } from "@/components/gallery";
import { club, pageMetadata } from "@/lib/ctc";
export const metadata = pageMetadata(
  "Inside Chicago’s Calisthenics Community",
  "A look inside Chicago Training Club: lakefront training, shared practice and the people behind Chicago’s calisthenics community.",
  "/community",
);
export default function CommunityPage() {
  return (
    <main id="main">
      <PageIntro
        image={{ name: "people-hero", alt: "A CTC member wearing a Chicago Training Club shirt beside athletes practicing on red outdoor bars" }}
        caption="The people make the practice."
        action={{ href: "#community-gallery", label: "Meet the community" }}
        eyebrow="03 / The people"
        title={
          <>
            THIS IS WHAT
            <br />
            SHOWING UP LOOKS LIKE.
          </>
        }
        text="The attempts. The encouragement. The moment something clicks. A few frames from life at the bars with Chicago Training Club."
      />
      <div id="community-gallery"><Gallery full /></div>
      <div
        className="community-follow section-pad"
        style={{ paddingBottom: 70 }}
      >
        <ButtonLink href={club.instagram} external>
          More from the club on Instagram
        </ButtonLink>
      </div>
      <JoinBanner />
    </main>
  );
}
