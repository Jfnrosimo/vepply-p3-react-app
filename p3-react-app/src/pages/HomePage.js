//Import components
import TopProductTable from "../components/TopProductTable";
import DoughnutChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";

//Import redux
import { useSelector } from "react-redux";

//Import routing
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";

//Import image
import arrowRight from "../assets/icons/arrow-right.png";
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
              <Anchor to="/#dashboard" className="start-button">
                MONITOR NOW
              </Anchor>
              <Link to="/product-list" className="add-button">
                ALL PRODUCTS
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard-container">
          <h3 className="dashboard-title" id="dashboard">
            SUPPLY DASHBOARD
          </h3>
          <div className="dashboard-table">
            <TopProductTable />
          </div>
          <div className="chart-container">
            <div className="doughnut-chart">
              <h4>
                <small>Chart 1. </small>Current vegetable crop planted
              </h4>
              <small>
                <em>By clicking each item, you can compare specific crop.</em>
              </small>
              <DoughnutChart />
            </div>
            <div className="bar-chart">
              <h4>
                <small>Chart 2. </small>Current vegetable crop planted
              </h4>
              <BarChart />
            </div>
          </div>
        </div>

        <div className="list-button-container">
          <Link to="/product-list">
            Product List
            <img src={arrowRight} alt="arrow right icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
