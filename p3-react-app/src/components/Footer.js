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
          <textarea></textarea>
          <input type="button" value="Send message" />
        </form>
      </div>
      <div className="footer-details-container">
        <div className="footer-column">
          <ul>
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
      <p>All rights reserved 2022 | Jefferson Rosimo</p>
    </footer>
  );
};

export default Footer;
