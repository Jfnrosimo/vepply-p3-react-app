//Import hook
import { useState } from "react";

//Import redux
import { useDispatch, useSelector } from "react-redux";

//Import css
import "./ProductForm.css";

//Import link routing
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";

//Import image
import arrowLeft from "../assets/icons/arrow-left.png";
import arrowDown from "../assets/icons/arrow-down.png";

const ProductForm = () => {
  //Create variable and function to add each input to the initial state using useState hook
  const [name, setName] = useState("");
  const [kilo, setKilo] = useState(0);
  const [image, setImage] = useState("");
  const [producer, setProducer] = useState("");
  const [datePlanted, setDatePlanted] = useState("");
  const [dateOfHarvest, setDateOfHarvest] = useState("");
  const [hasError, setError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const dispatch = useDispatch();

  const clearForm = () => {
    setName("");
    setKilo(0);
    setImage("");
    setProducer("");
    setDatePlanted("");
    setDateOfHarvest("");
  };

  const onAddProductHandler = (event) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      kilo === 0 ||
      producer.trim() === "" ||
      datePlanted === "" ||
      dateOfHarvest === ""
    ) {
      setError(true);
      setMsgError("All fields are required");
    } else {
      dispatch({
        type: "ADD_NEW_PRODUCT",
        payload: {
          name: name,
          kilogram: kilo,
          producer: producer,
          datePlanted: datePlanted,
          dateOfHarvest: dateOfHarvest,
        },
      });
      setError(false);
      clearForm();
      alert(`Sucessfully registered ${kilo} kg of planted ${name.trim()}`);
    }
  };

  return (
    <>
      <div className="product-form-container">
        <form className="product-form" onSubmit={onAddProductHandler}>
          <h2>Add vegetable crop</h2>
          <div>
            <label className="label" htmlFor="product-name">
              Product Name:
            </label>
            <input
              id="product-name"
              type="text"
              value={name}
              placeholder="Vegetable name"
              onChange={(e) => setName(e.target.value.toLowerCase())}
            />
          </div>
          <div>
            <label htmlFor="kilogram">Kilograms:</label>
            <input
              id="kilogram"
              type="number"
              value={kilo}
              placeholder="Enter estimated kilo"
              onChange={(e) => Number(setKilo(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="producer">Producer's name:</label>
            <input
              id="producer"
              type="text"
              value={producer}
              placeholder="Enter your name/group"
              onChange={(e) => setProducer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="datePlanted">Date planted:</label>
            <input
              id="datePlanted"
              type="date"
              value={datePlanted}
              onChange={(e) => setDatePlanted(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Havest date &#40;target&#41;:</label>
            <input
              id="date"
              type="date"
              value={dateOfHarvest}
              onChange={(e) => setDateOfHarvest(e.target.value)}
            />
          </div>
          {/* <div>
        <label htmlFor="image">Image url:</label>
        <input
          id="image"
          type="url"
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
        />
      </div> */}
          <button type="submit">Add Product</button>
          {hasError && <small className="error-msg">{msgError}</small>}
        </form>
        <div className="link-container">
          <Link className="dashboard-link" to="/">
            <img src={arrowLeft} alt="arrow left icon" />
            Back to Dashboard
          </Link>
          <Anchor
            className="my-products-link"
            to="/product-list#harvested-crop-table"
          >
            Harvested crop <img src={arrowDown} alt="arrow down icon" />
          </Anchor>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
