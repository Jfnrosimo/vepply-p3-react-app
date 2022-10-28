//Import routing
import { Link } from "react-router-dom";

//Import redux
import { useSelector } from "react-redux";

//Import component
import ProductForm from "../components/ProductForm";

const ProductListsPage = () => {
  const chartData = useSelector((state) => state.chartData);

  return (
    <>
      <div>
        <ProductForm />
        <Link to="/">Back to Dashboard</Link>
      </div>
    </>
  );
};

export default ProductListsPage;
