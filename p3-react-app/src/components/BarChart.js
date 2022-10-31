//Import chart js
import { Bar } from "react-chartjs-2";

//Import redux
import { useSelector } from "react-redux";

const BarChart = () => {
  const productData = useSelector((state) => state.productData);

  //Filter each object in the array with the same name and add its kilogram, then return a new object that shows total kilogram of each product
  const chartData = [];
  productData.forEach(function (product) {
    let productName = product.name.trim().toLowerCase();
    if (!this[productName]) {
      this[productName] = { name: productName, kilogram: 0 };
      chartData.push(this[productName]);
    }
    this[productName].kilogram += Number(product.kilogram);
  }, {});

  //Sort the chart data into ascending order of its kilogram
  const ascendingSortChartData = chartData.sort(
    (a, b) => a.kilogram - b.kilogram
  );

  const dashboard = {
    allChartData: {
      labels: ascendingSortChartData.map((data) => data.name),
      datasets: [
        {
          label: "Current supply (kg)",
          data: ascendingSortChartData.map((data) => data.kilogram),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(255, 205, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(201, 203, 207, 0.5)",
          ],
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    },
  };

  return <Bar data={dashboard.allChartData} />;
};

export default BarChart;
