//Import hook
import { useState } from "react";

//Import redux
import { useDispatch } from "react-redux";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [kilo, setKilo] = useState(0);
  const [image, setImage] = useState("");
  const [producer, setProducer] = useState("");

  const dispatch = useDispatch();

  const clearForm = () => {
    setName("");
    setKilo(0);
    setImage("");
    setProducer("");
  };

  const onAddProductHandler = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: { name: name, kilogram: kilo, producer: producer },
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
        <label htmlFor="producer">Producer's name:</label>
        <input
          id="producer"
          type="text"
          placeholder="Enter your name/group"
          onChange={(e) => setProducer(e.target.value)}
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
