import { useTableData } from "@/context/TableLayoutDataConfigurationContext";
import TableAddRow from "./TableAddRow";
import TableRow from "./TableRow";

const TableBody = () => {

  const {
    data,
    isAdding
  } = useTableData();

  return (
    <div className="min-h-[70vh] sm:min-h-[60vh] md:min-h-[50vh]">
      {
        (data.length === 0 && !isAdding) ? <p className="text-center p-5">No data available</p>
          : data.map((item: any) => (
            <TableRow key={item["_id"]} item={item} />
          ))
      }
      {
        isAdding ?
          <TableAddRow key="newRec" />
          : null

      }
    </div>
  );
}
export default TableBody;