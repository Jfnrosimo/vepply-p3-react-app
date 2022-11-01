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
      console.log(newProduct);
      return { ...state, productData: [...state.productData, newProduct] };

    case "DELETE":
      console.log("DELETE works");
      return {
        ...state,
        productData: state.productData.filter(
          (data) => data.id !== action.payload.id
        ),
      };
    case "MARK_AS_HARVESTED":
      console.log("MARK_AS_HARVESTED works");

      // const [harvestTable, setHarvestTable] = useState([]);
      // const onHarvested = (id) => {
      //   //Create state for harvest table list
      //   let harvestedItem = productData.filter((item) => item.id === id);
      //   setHarvestTable([
      //     ...harvestTable,
      //     { name: harvestedItem[0].name, kilogram: harvestedItem[0].kilogram },
      //   ]);
      // };
      let harvestedProduct = state.productData.filter(
        (data) => data.id === action.payload.id
      );
      let addedProduct = {
        name: harvestedProduct.name,
        kilogram: harvestedProduct.kilogram,
        datePlanted: harvestedProduct.datePlanted,
      };
      console.log(harvestedProduct);
      return {
        ...state,
        harvestTable: [...state.harvestTable, addedProduct],
      };
    default:
      return state;
  }
};

export default reducer;
