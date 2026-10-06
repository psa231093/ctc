import { instagramPosts } from "@/lib/instagram";
import { club } from "@/lib/ctc";
import { Arrow, Label } from "./ctc-ui";

export function InstagramPreview() {
  return (
    <section className="instagram-section section-pad" aria-labelledby="instagram-heading">
      <div className="instagram-heading" data-reveal>
        <div><Label>From the club’s Instagram</Label><h2 id="instagram-heading">BETWEEN THE SETS.</h2></div>
        <a className="text-link" href={club.instagram} target="_blank" rel="noopener noreferrer">@chicagotrainingclub <Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div className="instagram-grid">
        {instagramPosts.map((post, index) => <a key={post.id} href={post.href} target="_blank" rel="noopener noreferrer" className="instagram-post" data-reveal>
          <img src={`/images/${post.image}-400.webp`} srcSet={`/images/${post.image}-400.webp 400w, /images/${post.image}-800.webp 800w`} sizes="(max-width: 700px) 45vw, 23vw" width="800" height="1000" alt={post.alt} loading="lazy" decoding="async" />
          <span className="instagram-post-caption mono"><span>CTC / 0{index + 1}</span><Arrow diagonal /></span>
          <span className="sr-only">View Instagram post {index + 1} (opens in a new tab)</span>
        </a>)}
      </div>
    </section>
  );
}
