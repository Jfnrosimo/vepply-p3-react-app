//Import routing
import { Link } from "react-router-dom";

//Import redux
import { useSelector } from "react-redux";

//Import component
import ProductForm from "../components/ProductForm";
import ProductRow from "../components/ProductRow";

const ProductListsPage = () => {
  const productData = useSelector((state) => state.productData);

  return (
    <>
      <div>
        <ProductForm />
        <table>
          <thead>
            <tr>
              <th>List of Products</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Kilo</th>
              <th>Date Planted</th>
              <th>Harvest Date</th>
              <th>Producer</th>
            </tr>
            {productData.map((item) => (
              <ProductRow
                id={item.id}
                name={item.name}
                kilogram={item.kilogram}
                datePlanted={item.datePlanted}
                dateOfHarvest={item.dateOfHarvest}
                producer={item.producer}
              />
            ))}
          </tbody>
        </table>
        <Link to="/">Back to Dashboard</Link>
      </div>
    </>
  );
};

export default ProductListsPage;
