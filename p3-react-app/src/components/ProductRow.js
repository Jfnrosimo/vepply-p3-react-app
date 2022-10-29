const ProductRow = ({ name, kilogram }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{kilogram} kg</td>
    </tr>
  );
};

export default ProductRow;
