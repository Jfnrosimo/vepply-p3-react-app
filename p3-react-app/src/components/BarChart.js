//Import chart js
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { useSelector } from "react-redux";

const BarChart = () => {
  const productData = useSelector((state) => state.productData);

  const chartData = [];

  productData.forEach(function (product) {
    if (!this[product.name]) {
      this[product.name] = { name: product.name, kilogram: 0 };
      chartData.push(this[product.name]);
    }
    this[product.name].kilogram += product.kilogram;
  }, {});

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
        },
      ],
    },
  };

  return <Bar data={dashboard.allChartData} />;
};

export default BarChart;
