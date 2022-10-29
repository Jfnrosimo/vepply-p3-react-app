//Import data
import ProductData from "../data/ProductData.json";
//Import uuid
import { v4 as uuidv4 } from "uuid";

const initialState = {
  productData: ProductData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      let newProduct = {
        id: uuidv4(),
        name: action.payload.name,
        kilogram: action.payload.kilogram,
        datePlanted: action.payload.datePlanted,
        dateOfHarvest: action.payload.dateOfHarvest,
        producer: action.payload.producer,
      };
      console.log(newProduct);
      return { ...state, productData: [...state.productData, newProduct] };
    case "MARK_AS_HARVESTED":
      console.log(state.productData);
      let currentData = state.productData;
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
