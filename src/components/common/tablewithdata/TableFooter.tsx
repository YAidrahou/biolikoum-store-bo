const TableFooter = () => {
    return (
        <div className="rounded-b-lg border-t-2 border-gray-200">
            <div>
                <p className="bg-gray-100 p-3 text-center text-gray-700 rounded-b-lg">
                    Showing {Math.min(10, 100)} of 100 entries
                </p>
            </div>
        </div>
    );
}

export default TableFooter;