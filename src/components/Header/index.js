import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="header-main">
        <div className="header-logo">
          <img
            src="/images/Logo.png"
            alt="Metta Muse logo"
            className="header-logo-img"
          />
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="header-actions">
          <button type="button" aria-label="Search products">
            <img
              src="/images/search-normal.png"
              alt="Search products icon"
              className="icon"
            />
          </button>
         
          <button type="button" aria-label="Wishlist">
            <img
              src="/images/heart.png"
              alt="Wishlist heart icon"
              className="icon"
            />
          </button>
          <button type="button" aria-label="Shopping cart">
            <img
              src="/images/shopping-bag.png"
              alt="Shopping cart icon"
              className="icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
