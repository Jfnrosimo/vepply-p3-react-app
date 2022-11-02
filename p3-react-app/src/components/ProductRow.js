//Import redux
import { useDispatch } from "react-redux";

const ProductRow = ({
  id,
  name,
  kilogram,
  datePlanted,
  dateOfHarvest,
  producer,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{name}</td>
      <td>{kilogram} kg</td>
      <td>{datePlanted}</td>
      <td>{dateOfHarvest}</td>
      <td>{producer}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "MARK_AS_HARVESTED",
              payload: {
                id: id,
              },
            });
            dispatch({
              type: "DELETE",
              payload: { id: id },
            });
          }}
        >
          Harvested
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
