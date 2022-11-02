//Import data
import ProductData from "../data/ProductData.json";
//Import uuid
import { v4 as uuidv4 } from "uuid";

const initialState = {
  productData: ProductData,
  harvestTable: [],
  page: 0,
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
      // let addedProduct = {
      //   name: harvestedProduct[0].name,
      //   kilogram: harvestedProduct[0].kilogram,
      //   datePlanted: harvestedProduct[0].datePlanted,
      // };
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

    case "NEXT_PAGE":
      return {
        ...state,
        page: state.productData.length !== 0 ? state.page + 1 : state.page,
      };

    case "PREVIOUS_PAGE":
      return { ...state, page: state.page > 0 ? state.page - 1 : state.page };

    default:
      return state;
  }
};

export default reducer;
