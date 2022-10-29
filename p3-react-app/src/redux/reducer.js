//Import data
import productData from "../data/ProductData.json";

const initialState = {
  productData: productData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      let newProduct = {
        name: action.payload.name,
        kilogram: action.payload.kilogram,
        datePlanted: action.payload.datePlanted,
        dateOfHarvest: action.payload.dateOfHarvest,
        producer: action.payload.producer,
      };
      return { ...state, productData: [...state.productData, newProduct] };
    case "MARK_AS_HARVESTED":
      console.log("HARVESTED");
      return {
        ...state,
        productData: state.productData.filter(
          (data) => data.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};

export default reducer;
