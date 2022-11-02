//Import redux
import { useDispatch, useSelector } from "react-redux";

//Import component
import ProductForm from "../components/ProductForm";
import ProductRow from "../components/ProductRow";
import HarvestedRow from "../components/HarvestedRow";

//Import state hook and useMemo
import { useState, useMemo } from "react";

//Import css
import "./ProductListsPage.css";

const ProductListsPage = () => {
  //import state from redux
  const productData = useSelector((state) => state.productData);
  const harvestTable = useSelector((state) => state.harvestTable);

  //Create pagination for table
  const dispatch = useDispatch();
  const allProductPageData = useMemo(() => dispatch({ type: "MEMORIZE_PAGE" }));

  console.log(harvestTable);

  return (
    <>
      <div className="product-list-container">
        <ProductForm />

        <table>
          <thead>
            <tr>
              <th colSpan={5}>List of All Products</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-heading">
              <th>Name</th>
              <th>Kilo</th>
              <th>Date Planted</th>
              <th>Harvest Date</th>
              <th>Producer</th>
            </tr>
            {productData.map((item) => (
              <ProductRow
                key={item.id}
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
      </div>
      {/* <button onClick={prevPage}>Previous page</button>
      <button onClick={nextPage}>Next page</button> */}

      <div className="product-list-2-container" id="harvested-crop-table">
        <table>
          <thead>
            <tr>
              <th colSpan={5}>Your harvested crops</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-heading">
              <th>Name</th>
              <th>Kilo</th>
              <th>Date Planted</th>
              <th>Harvest Date</th>
              <th>Producer</th>
            </tr>
            {harvestTable.map((item) => (
              <HarvestedRow
                key={item.id}
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
      </div>
    </>
  );
};

export default ProductListsPage;
