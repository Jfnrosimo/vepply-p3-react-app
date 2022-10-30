//Import components
import TopProductTable from "../components/TopProductTable";
import DoughnutChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";

//Import redux
import { useSelector } from "react-redux";

//Import routing
import { Link } from "react-router-dom";

//Import image
import heroImg from "../assets/images/hero-bg-image.jpg";

//Import css
import "./HomePage.css";

//Import chartjs
import { Chart as ChartJS } from "chart.js/auto";

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
              <Link to="/product-list" className="add-button">
                Products
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <h3 className="dashboard-title">SUPPLY DASHBOARD</h3>
          <div className="dashboard-table">
            <TopProductTable />
          </div>
          <div className="chart-container">
            <div className="doughnut-chart">
              <h4>TITLE</h4>
              <DoughnutChart />
            </div>
            <div className="bar-chart">
              <h4>TITLE</h4>
              <BarChart />
            </div>
          </div>
        </div>
        <Link to="/product-list">Product List</Link>
      </div>
    </>
  );
};

export default HomePage;
