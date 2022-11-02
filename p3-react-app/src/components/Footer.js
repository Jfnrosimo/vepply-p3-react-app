//Import css
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="contact-us-container">
        <p>Help us improve the site...</p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <textarea rows="10" placeholder="Enter suggestions"></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <div className="footer-details-container">
        <div className="footer-column">
          <ul className="footer-nav">
            <li>Home</li>
            <li>About Us</li>
            <li>See a demo</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partners</h4>
          <ul>
            <li>Bugs Light Year</li>
            <li>Uplift Code Camp</li>
            <li>Google</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li></li>
          </ul>
        </div>
      </div>
      <p className="credits">All rights reserved 2022 | Jefferson Rosimo</p>
      <p className="credits">
        Images from <a href="https://www.edmaration.com/">edmaration</a>
      </p>
    </footer>
  );
};

export default Footer;
