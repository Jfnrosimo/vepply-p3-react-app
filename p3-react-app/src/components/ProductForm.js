const ProductForm = () => {
  return (
    <form className="">
      <label htmlFor="product-name">Product Name:</label>
      <input id="product-name" type="text" placeholder="Vegetable name" />
      <label htmlFor="kilogram">Kilograms:</label>
      <input id="kilogram" type="number" />
    </form>
  );
};

export default ProductForm;
