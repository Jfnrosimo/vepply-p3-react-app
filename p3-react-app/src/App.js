//Import components
import Header from "./components/Header";
import BarChart from "./components/BarChart";
import ProductListButton from "./components/ProductListButton";

//Import page
import ProductListsPage from "./pages/ProductListsPage";
import HomePage from "./pages/HomePage";

//Import redux
import { useSelector } from "react-redux";

//Import routing
import { Route, Routes } from "react-router-dom";

//Import css
import "./App.css";

const App = () => {
  const productData = useSelector((state) => state.productData);

  return (
    <>
      <Header />
      <main>
        <BarChart chartData={productData} />
        <ProductListButton />
      </main>
      {/* Routes */}
      <Routes>
        <Route
          path="/product-list"
          element={<ProductListsPage exact={true} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
