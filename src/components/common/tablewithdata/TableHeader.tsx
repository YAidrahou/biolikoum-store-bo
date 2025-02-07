import { useTableData } from "@/context/TableLayoutDataConfigurationContext";

const TableHeader = () => {
  const {
    headerColumns
  }: { headerColumns: string[] } = useTableData();
  
  return (
    <div className="flex bg-primary border-b p-3 rounded-t-lg">
      {headerColumns.map((col: string) => (
        <div key={col} className="flex-1 text-left px-2 text-white">
          {col.toUpperCase()}
        </div>
      ))}
      <div className="flex-1 text-right px-2 text-white uppercase">Actions</div>
    </div>
  );
}

export default TableHeader;