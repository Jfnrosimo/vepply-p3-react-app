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
      };
      return { ...state, productData: [...state.productData, newProduct] };
    default:
      return state;
  }
};

export default reducer;
