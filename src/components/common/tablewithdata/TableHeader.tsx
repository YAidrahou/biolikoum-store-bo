const TableHeader = ({ tableHeader }: { tableHeader: Array<string> }) => {
  return (
    <div className="flex bg-primary border-b p-3 rounded-t-lg">
      {tableHeader.map((col) => (
        <div key={col} className="flex-1 text-left px-2 text-white">
          {col.toUpperCase()}
        </div>
      ))}
      <div className="flex-1 text-right px-2 text-white uppercase">Actions</div>
    </div>
  );
}

export default TableHeader;