import TableAddRow from "./TableAddRow";
import TableRow from "./TableRow";

const TableBody = ({
  data,
  isAdding,
  newItem,
  handleCancelToggle,
  handleAddToggle,
  handleUpdateToggle,
  handleDeleteToggle
}: {
  data: any,
  isAdding: any,
  newItem: any,
  handleCancelToggle: () => void,
  handleAddToggle: (item: any) => void,
  handleUpdateToggle: (item: any) => void,
  handleDeleteToggle: (idItem: string) => void
}) => {

  return (
    <div className="min-h-[70vh] sm:min-h-[60vh] md:min-h-[50vh]">
      {
        (data.length === 0 && !isAdding) ? <p className="text-center p-5">No data available</p>
          : data.map((item: any) => (
            <TableRow key={item["_id"]} item={item} updateItem={handleUpdateToggle} deleteItem={handleDeleteToggle} />
          ))
      }
      {
        isAdding ?
          <TableAddRow key="newRec" item={newItem} cancelToggle={handleCancelToggle} addToggle={handleAddToggle} />
          : null

      }
    </div>
  );
}
export default TableBody;