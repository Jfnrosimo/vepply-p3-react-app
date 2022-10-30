//Import chart js
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";

const DoughnutChart = () => {
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
          hoverOffset: 5,
        },
      ],
    },
  };

  return <Doughnut data={dashboard.allChartData} />;
};

export default DoughnutChart;
