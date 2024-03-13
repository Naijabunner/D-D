import Pay from "./Ui/Payment";

const Ship = () => {
  return (
    <>
      <section className="flex flex-col items-center overflow-x-hidden checkout_section">
        <div className="flex font-extrabold ">
          <div className=" flex-col flex items-center">
            <div className=" h-8 flex justify-center items-center ">
              <p className="w-[50vmin] h-[4px] bg-black rounded-r-md rounded-l-md "></p>
              <p className="bg-white absolute p-0 w-7 h-7 flex justify-center items-center rounded-full border-solid border-black border-4">
                <span>{">"}</span>
              </p>
            </div>
            <p className="p-0 m-0 font-mono text-sm">Shipment</p>
          </div>
          <div className=" flex-col flex items-center">
            <div className=" h-8 flex justify-center items-center ">
              <p className="w-[50vmin] h-[4px] bg-gray-200  rounded-r-md rounded-l-md "></p>
              <p className="bg-white absolute p-0 w-7 h-7 flex justify-center items-center rounded-full border-solid border-gray-200  border-4">
                <span>{">"}</span>
              </p>
            </div>
            <p className="p-0 m-0 font-mono text-sm">Payment</p>
          </div>
        </div>
        <Pay />
      </section>
    </>
  );
};

export default Ship;
