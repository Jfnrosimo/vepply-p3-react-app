//Import component
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Footer />
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
