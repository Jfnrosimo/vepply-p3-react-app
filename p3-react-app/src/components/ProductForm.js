//Import hook
import { useState } from "react";

//Import redux
import { useSelector, useDispatch } from "react-redux";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [kilo, setKilo] = useState(0);
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const clearForm = () => {
    setName("");
    setKilo("");
    setImage("");
  };

  const onAddProductHandler = (event) => {
    event.preventDefault();

    // let newProduct = {
    //   name,
    //   kilo,
    //   image,
    // };

    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: { name: name, kilogram: kilo },
    });
  };

  return (
    <form className="ProductForm" onSubmit={onAddProductHandler}>
      <div>
        <label htmlFor="product-name">Product Name:</label>
        <input
          id="product-name"
          type="text"
          placeholder="Vegetable name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="kilogram">Kilograms:</label>
        <input
          id="kilogram"
          type="number"
          placeholder="Enter estimated kilo"
          onChange={(e) => setKilo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image url:</label>
        <input
          id="image"
          type="url"
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
