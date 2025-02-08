import Card from "./Card";

const GridContainer = () => {


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4 overflow-y-auto">

            {
                /*products.map((product : Product) =>
                    <Card key={product._id}  />
                )*/
            }
            <Card />
        </div>
    );
}
export default GridContainer;