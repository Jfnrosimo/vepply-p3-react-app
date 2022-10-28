//Import chart js
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { useSelector } from "react-redux";

const BarChart = () => {
  const chartData = useSelector((state) => state.chartData);
  return <Bar data={chartData} />;
};

export default BarChart;
