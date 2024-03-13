import Items from "./Ui/StoreItems";
const Stores = () => {
    return ( <>
    <section className="flex flex-col items-center">
        <div className="flex justify-center text-2xl ">
            <h3>
            Our featured store
        </h3>
        </div>
        <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 w-[90%] ">
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