//Import data
import productData from "../data/ProductData.json";

const initialState = {
  productData: productData,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export default reducer;
