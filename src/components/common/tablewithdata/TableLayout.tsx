import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";

const TableLayout = () => {

    return (

        <div className="w-[70vw] overflow-x-auto place-self-center">
            <div className="w-full border border-gray-300 rounded-lg shadow-md">
                <TableHeader  />
                <TableBody  />
                <TableFooter />
            </div>
        </div>

    );
}
export default TableLayout;