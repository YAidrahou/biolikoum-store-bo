'use client';
import { useProductFilterBar } from "@/context/ProductFilterBarContext";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductFilterBar = () => {
    const {
        filter,
        setFilter,
        view,
        setView,
        sort,
        setSort,
        search,
        setSearch
    } = useProductFilterBar();


    return (
        <div className="flex flex-col w-full md:flex-row items-center bg-white border-b border-gray-300 p-4">
            <h1 className="text-[24px] text-primary justify-self-start font-semibold "> PRODUCTS </h1>
            <div className="flex flex-grow justify-center flex-col md:flex-row">
                <div className="flex items-center bg-white mr-4 mt-4 md:mt-0 border border-white rounded-md p-2">
                    <span className="text-[18px] text-primary font-semibold mr-2">View :</span>
                    <button className={`px-2 py-1 hover:bg-primary hover:text-white ml-2 border w-[80px] ${ view === "grid" ? 'bg-primary text-white' : 'bg-white text-primary' } border-primary text-primary border-gray-300 rounded-md`} onClick={() => setView("grid")}>Grid</button>
                    <button className={`px-2 py-1 hover:bg-primary hover:text-white ${ view === "list" ? 'bg-primary text-white' : 'bg-white text-primary' }  border-primary text-primary ml-2 border w-[80px] border-gray-300 rounded-md`} onClick={() => setView("list")}>List</button>
                </div>
                <div className="flex items-center mt-4 mr-4 md:mt-0">
                    <span className="text-[18px] text-primary font-semibold mr-2">Search :</span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products"
                        className="border text-primary border-gray-300 rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex items-center mr-4">
                    <span className="text-[18px] text-primary font-semibold">Filter by:</span>
                    <select className="border border-gray-300 text-primary rounded-md px-2 py-1 ml-2">
                        <option value="all">All</option>
                        <option value="lowstock">Low in stock</option>
                    </select>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <span className="text-[18px] text-primary font-semibold">Sort by:</span>
                    <select className="border border-gray-300 text-primary rounded-md px-2 py-1 ml-2">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>
            <span className="flex flex-row items-center bg-primary rounded-lg text-white p-2">RESET FILTERS<FontAwesomeIcon icon={faRefresh} className="ml-2" /></span>
        </div>
    );
};
export default ProductFilterBar;