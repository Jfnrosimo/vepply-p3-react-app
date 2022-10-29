const ProductRow = ({ name, kilogram, producer }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{kilogram} kg</td>
      <td>{producer}</td>
    </tr>
  );
};

export default ProductRow;
