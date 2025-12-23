import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
        injectSchema(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);


  function injectSchema(items) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Metta Muse Product Listing",
      itemListElement: items.map((p, index) => ({
        "@type": "Product",
        position: index + 1,
        name: p.title,
        image: p.image,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: p.price,
          availability: "https://schema.org/InStock",
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return Array.from(set);
  }, [products]);

  function handleToggleCategory(category) {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...products];

  
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

  
    if (sortOption === "priceLowHigh") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, selectedCategories, sortOption]);

  return (
    <>
    <Helmet>
        <title>Discover Our Products | Metta Muse</title>
        <meta
          name="description"
          content="Discover curated handcrafted products on Metta Muse. Filter by category and price to find the perfect item."
        />
        <meta name="robots" content="index,follow" />
   
      </Helmet>
      <Header />
      <main className="plp">
    
        <section className="hero">
          <div className="hero-inner">
            <h1>Discover Our Products</h1>
            <p>
              Explore carefully curated handcrafted items. Filter by category
              and sort by price to find the perfect product.
            </p>
          </div>
        </section>

        <section className="plp-main">
          <Filters
            categories={categories}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
            productCount={filteredAndSortedProducts.length}
          />

          <section className="product-section" id="products">
    
            <header className="product-section-header">
              <h2>Our Products</h2>
              <span className="sort-info">
                {sortOption === "priceLowHigh" && "Price: Low to High"}
                {sortOption === "priceHighLow" && "Price: High to Low"}
                {sortOption === "none" && "Recommended"}
              </span>
            </header>

            {loading && <p>Loading products...</p>}
            {error && !loading && <p className="error-text">Error: {error}</p>}

            {!loading && !error && (
              <div className="product-grid">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </section>

        <Footer />
      </main>
    </>
  );
}


export default App;
