import { club } from "@/lib/ctc";
import { featuredProducts } from "@/lib/shop-preview";
import { Arrow, ButtonLink, Label, Photo } from "./ctc-ui";
export function ShopPreview() {
  return (
    <section
      className="shop-section section-pad"
      aria-labelledby="shop-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <Label number="04">Made for the practice</Label>
          <h2 id="shop-heading">
            TAKE THE CLUB
            <br />
            WITH YOU.
          </h2>
        </div>
        <div className="shop-intro">
          <p>
            From the first set to the rest of your day.
            <br />
            Explore the CTC collection.
          </p>
          <ButtonLink href={club.store} external>
            Visit the CTC shop
          </ButtonLink>
        </div>
      </div>
      <div className="product-grid">
        {featuredProducts.map((product, index) => (
          <a
            key={product.handle}
            className="product-preview"
            href={`${club.store}products/${product.handle}`}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
          >
            <div className="product-image">
              <Photo
                name={product.image}
                alt={product.alt}
                sizes="(max-width: 700px) 85vw, 31vw"
              />
              <span className="product-index mono">CTC / 0{index + 1}</span>
              <span className="product-visit">
                <Arrow diagonal />
              </span>
            </div>
            <div className="product-caption">
              <h3>{product.name}</h3>
              <span className="mono">{product.material}</span>
              <span className="product-link">
                View in the shop <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </div>
          </a>
        ))}
      </div>
      <p className="shop-note mono">
        CURRENT SIZES, PRICES & AVAILABILITY AT THE CTC SHOP.
      </p>
    </section>
  );
}
