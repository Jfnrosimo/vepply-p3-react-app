const HarvestedRow = ({
  id,
  name,
  kilogram,
  datePlanted,
  dateOfHarvest,
  producer,
}) => {
  return (
    <tr>
      <td>{name.toLowerCase()}</td>
      <td>{kilogram} kg</td>
      <td>{datePlanted}</td>
      <td>{dateOfHarvest}</td>
      <td>{producer}</td>
      <td>
        <button type="button">Add to market</button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => dispatch({ type: "DELETE", payload: { id: id } })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default HarvestedRow;
