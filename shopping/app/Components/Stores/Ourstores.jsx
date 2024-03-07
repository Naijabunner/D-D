import Items from "./Ui/StoreItems";
const Stores = () => {
    return ( <>
    <section className="flex flex-col items-center">
        <div className="flex justify-center text-2xl ">
            <h3>
            Our featured store
        </h3>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] ">
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        
</div>
<div className="">
    <button>Load More</button>
</div>
    </section>
    </> );
}
 
export default Stores;