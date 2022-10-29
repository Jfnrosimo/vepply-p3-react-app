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
          <h2>Monitor the vegetable supply and production</h2>
        </div>
        <BarChart />
        <Link to="/product-list">Product List</Link>
      </div>
    </>
  );
};

export default HomePage;
