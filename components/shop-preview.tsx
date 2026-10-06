import { club } from "@/lib/ctc";
import { featuredProducts } from "@/lib/shop-preview";
import { Label, Photo } from "./ctc-ui";
export function ShopPreview() {
  return (
    <section
      className="shop-section section-pad"
      aria-labelledby="shop-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <Label number="04">The CTC collection</Label>
          <h2 id="shop-heading">
            REP THE CLUB.
            <br />
            ON & OFF THE BARS.
          </h2>
        </div>
        <div className="shop-intro">
          <p>
            Hoodies. Training pants. Club tees.
            <br />
            Wear your connection to CTC.
          </p>
          <a className="button" href={club.store} target="_blank" rel="noopener noreferrer">
            Explore the collection
          <span className="sr-only"> (opens in a new tab)</span></a>
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
              <span className="product-visit mono">EXPLORE</span>
            </div>
            <div className="product-caption">
              <h3>{product.name}</h3>
              <span className="mono">{product.material}</span>
              <span className="product-link">
                View in the shop
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
