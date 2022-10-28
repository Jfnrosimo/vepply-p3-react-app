//Import component
import Header from "./components/Header";

//Import page
import ProductListsPage from "./pages/ProductListsPage";
import HomePage from "./pages/HomePage";

//Import routing
import { Route, Routes } from "react-router-dom";

//Import css
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/product-list"
          element={<ProductListsPage exact={true} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
