//Import chart js
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { useSelector } from "react-redux";

const BarChart = () => {
  const productData = useSelector((state) => state.productData);

  // const arrayOfKilo = productData.filter((data) => data.name === "potato");
  // console.log(arrayOfKilo);

  const dashboardData = {
    chartData: {
      labels: productData.map((data) => data.name),
      datasets: [
        {
          label: "Current supply (kg)",
          data: productData.map((data) => data.kilogram),
        },
      ],
    },
  };

  return <Bar data={dashboardData.chartData} />;
};

export default BarChart;
