import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const TableLayout = ({
    data,
    isAdding,
    newItem,
    column,
    cancleToggle,
    addToggle,
    updateToggle,
    deleteToggle
}: {
    data: any,
    isAdding: any,
    newItem: any,
    column: string[],
    cancleToggle: () => void,
    addToggle: (item: any) => void,
    updateToggle: (item: any) => void,
    deleteToggle: (idItem: string) => void,
}) => {

    return (

        <div className="w-[70vw] overflow-x-auto place-self-center">
            <div className="w-full border border-gray-300 rounded-lg shadow-md">
                <TableHeader tableHeader={column} />
                <TableBody data={data} newItem={newItem} isAdding={isAdding} handleAddToggle={addToggle} handleUpdateToggle={updateToggle} handleDeleteToggle={deleteToggle} handleCancelToggle={cancleToggle} />
                <TableFooter />
            </div>
        </div>

    );
}
export default TableLayout;