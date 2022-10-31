//Import css
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-details-container">
        <div className="footer-column">
          <h4>About us</h4>
          <ul>
            <li>Non-government Organization</li>
            <li>Batch 1</li>
            <li></li>
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
