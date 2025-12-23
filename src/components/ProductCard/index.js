import "./index.css";

function ProductCard({ product }) {
  const displayTitle =
    product.title.length > 60
      ? product.title.slice(0, 57) + "..."
      : product.title;

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={`Handcrafted ${product.category} - ${product.title}`}
          loading="lazy"
        />
      </div>

      <div className="product-body">
        <p className="product-badge">New Product</p>
        <h3 className="product-title">{displayTitle}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-subtext">
          Sign in or create an account to see pricing
        </p>
      </div>

      <button
        type="button"
        className="wishlist-button"
        aria-label={`Add ${product.title} to wishlist`}
      >
        ♥
      </button>
    </article>
  );
}

export default ProductCard;
