const HarvestedRow = ({
  id,
  name,
  kilogram,
  datePlanted,
  dateOfHarvest,
  producer,
  onHarvestedProps,
}) => {
  return (
    <tr>
      <td>{name.toLowerCase()}</td>
      <td>{kilogram} kg</td>
      <td>{datePlanted}</td>
      <td>{dateOfHarvest}</td>
      <td>{producer}</td>
      <td>
        <button type="button" onClick={() => onHarvestedProps(id)}>
          Add to market
        </button>
      </td>
    </tr>
  );
};

export default HarvestedRow;
