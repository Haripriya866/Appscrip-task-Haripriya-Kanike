import "./index.css";

function Filters({
  categories,
  selectedCategories,
  onToggleCategory,
  sortOption,
  onSortChange,
  productCount
}) {
  return (
    <aside className="filters" aria-label="Product filters">
      <div className="filters-header">
        <span>{productCount} Items</span>
      </div>

     
      <section className="filter-group">
        <button type="button" className="filter-toggle">
          <span>Sort by price</span>
          <span>▾</span>
        </button>
        <div className="filter-options">
          <label className="filter-radio">
            <input
              type="radio"
              name="sort"
              value="none"
              checked={sortOption === "none"}
              onChange={() => onSortChange("none")}
            />
            Recommended
          </label>
          <label className="filter-radio">
            <input
              type="radio"
              name="sort"
              value="priceLowHigh"
              checked={sortOption === "priceLowHigh"}
              onChange={() => onSortChange("priceLowHigh")}
            />
            Price: Low to High
          </label>
          <label className="filter-radio">
            <input
              type="radio"
              name="sort"
              value="priceHighLow"
              checked={sortOption === "priceHighLow"}
              onChange={() => onSortChange("priceHighLow")}
            />
            Price: High to Low
          </label>
        </div>
      </section>

   
      <section className="filter-group">
        <button type="button" className="filter-toggle">
          <span>Category</span>
          <span>▾</span>
        </button>
        <div className="filter-options">
          {categories.map((category) => (
            <label key={category} className="filter-checkbox">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => onToggleCategory(category)}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Filters;
