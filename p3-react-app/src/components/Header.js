//Import logo
import appLogo from "../assets/images/app-logo.png";

//Import routing
import { Link } from "react-router-dom";

//Import css
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-nav">
          <div className="header-title">
            <img src={appLogo} alt="application logo" />
            <h1>App Name</h1>
          </div>
          <div className="header-login">
            <Link to="">Login</Link>
            <span>|</span>
            <Link to="">Register</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
