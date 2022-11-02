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

    //---------------------Test table pagination------------------
    // const [page, setPage] = useState(0); // create page state

    // const productPageData = useMemo(() => {
    //   //use useMemo to memorize page
    //   return productData.slice(page * 5, page * 5 + 5);
    // }, [page]);

    // const nextPage = () => setPage((prev) => prev + 1);
    // const prevPage = () => setPage((prev) => (prev > 0 ? prev - 1 : prev)); // prev page need to add condition to avoid page going below 0

    case "MEMORIZE_PAGE":
      return state.productData.slice(state.page * 5, state.page * 5 + 5);
    case "NEXT_PAGE":
      return;
    default:
      return state;
  }
};

export default reducer;
