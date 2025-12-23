import "./index.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <section className="footer-newsletter">
        <h2>Be the first to know</h2>
        <p>Sign up for updates from Metta Muse.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your e‑mail..."
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="footer-main">
        <div className="footer-column">
          <h3>Metta Muse</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>Artisans</li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders &amp; Shipping</li>
            <li>Join / Login as a Seller</li>
            <li>Payment &amp; Pricing</li>
            <li>Return &amp; Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <h3 className="footer-subheading">Metta Muse Accepts</h3>
          <div className="footer-payments">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>UPI</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="footer-subheading">Currency</h3>
          <p>USD $</p>
        </div>
      </section>

      <section className="footer-bottom">
        <p>Copyright © 2023 Metta Muse. All rights reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
