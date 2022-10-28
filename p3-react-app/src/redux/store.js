//Import redux
import { createStore } from "redux";

//Import reducer
import reducer from "./reducer";

const store = createStore(reducer);
export default store;
