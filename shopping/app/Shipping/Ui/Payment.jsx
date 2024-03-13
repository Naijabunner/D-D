import Ordersum from "./Ordersummary";

const Pay = () => {
  return (
    <>
      <section className="my-5 ">
        <div className=" border-b-[1px] border-black flex justify-center pb-2 text-2xl">
          <h3>Payment Method:</h3>
        </div>
        <div className="border-b-[1px] border-black">
          {/* Select Payment Method */}
          <div className="flex p-2 ">
            <input type="radio" />
            <p className="ml-2">Pay With bank transfer</p>
          </div>
          <span className="text-sm text-gray-400">You will be given a bank account number</span>
        </div>
        <div className=" border-b-[1px] border-black ">
          <div className="flex p-2 ">
            <input type="radio" />
            <p className="ml-2">Pay With Paystack</p>
          </div>
          <span className="text-sm text-gray-400">You will be redirected to Pay stack</span>
        </div>
        <div className="pt-8 flex justify-end">
          <button className="btn_color w-fit text-gray-100 px-3 py-1 rounded-sm">Continue to Payment</button>
        </div>
        <Ordersum /> {/* order Summary */}
        <div className="flex flex-col justify-start mt-5">
          {/* Edit user shipping Address */}
          <div className="flex justify-between items-center pb-1 border-b-[1px] border-gray-400">
            <p className="text-xl ">Ship To:</p>
            <span className="text-sm text-blue-500">Edit Shipping Address</span>
          </div>
          <div className="text-gray-800 text-sm flex flex-col justify-start mt-2">
            <input type="text" placeholder="Daaniel" />
            <input type="email" placeholder="gmail.com" />
            <input type="text" placeholder= "ertsdfghjklertyufghjkvbnrty ghjk c"
            />
            <input type="text" placeholder="enugu" />
            <input type="tel" placeholder="23456789"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pay;
