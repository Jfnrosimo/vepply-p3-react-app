//Import components
import BarChart from "../components/BarChart";

//Import redux
import { useSelector } from "react-redux";

//Import routing
import { Link } from "react-router-dom";

//Import image
import heroImg from "../assets/images/hero-bg-image.jpg";

//Import css
import "./HomePage.css";

const HomePage = () => {
  const productData = useSelector((state) => state.productData);

  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="hero-description">
            <h2>Monitor vegetable supply and production</h2>
            <div className="hero-button">
              <Link className="start-button">Start</Link>
              <Link className="add-button">Products</Link>
            </div>
          </div>
        </div>
        <BarChart />
        <Link to="/product-list">Product List</Link>
      </div>
    </>
  );
};

export default HomePage;
