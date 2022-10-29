//Import components
import BarChart from "../components/BarChart";

//Import redux
import { useSelector } from "react-redux";

//Import routing
import { Link } from "react-router-dom";

const HomePage = () => {
  const productData = useSelector((state) => state.productData);

  return (
    <>
      <div className="main">
        <BarChart />
        <Link to="/product-list">Product List</Link>
      </div>
    </>
  );
};

export default HomePage;
