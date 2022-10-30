//Import redux
import { useSelector } from "react-redux";

//Import css
import "./TopProductTable.css";

const TopProductTable = () => {
  const productData = useSelector((state) => state.productData);

  //Filter each object in the array with the same name and add its kilogram, then return a new object that shows total kilogram of each product
  const chartData = [];
  productData.forEach(function (product) {
    if (!this[product.name]) {
      this[product.name] = { name: product.name, kilogram: 0 };
      chartData.push(this[product.name]);
    }
    this[product.name].kilogram += product.kilogram;
  }, {});

  //Sort the chart data into descending order of its kilogram property
  const descendingSortChartData = chartData.sort(
    (a, b) => b.kilogram - a.kilogram
  );

  return (
    <table className="top-product-table">
      <thead>
        <tr>
          <th colSpan="2">HIGHEST PLANTED CROP</th>
        </tr>
        <tr>
          <th>Crop Name</th>
          <th>Current Total &#40;kilogram&#41;</th>
        </tr>
      </thead>
      <tbody>
        {descendingSortChartData.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.kilogram} kgs.</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopProductTable;
