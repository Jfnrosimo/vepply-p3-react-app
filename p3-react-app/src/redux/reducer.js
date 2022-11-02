//Import data
import ProductData from "../data/ProductData.json";
//Import uuid
import { v4 as uuidv4 } from "uuid";

const initialState = {
  productData: ProductData,
  harvestTable: [],
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
      return { ...state, productData: [...state.productData, newProduct] };

    case "REMOVE_FROM_ALL_LIST":
      return {
        ...state,
        productData: state.productData.filter(
          (data) => data.id !== action.payload.id
        ),
      };

    case "MARK_AS_HARVESTED":
      let harvestedProduct = state.productData.filter(
        (data) => data.id === action.payload.id
      );
      return {
        ...state,
        harvestTable: [...state.harvestTable, ...harvestedProduct],
      };

    case "DELETE":
      return {
        ...state,
        harvestTable: state.harvestTable.filter(
          (data) => data.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
