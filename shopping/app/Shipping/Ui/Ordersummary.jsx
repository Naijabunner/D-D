const Ordersum = () => {
    return ( 
        <div className="mt-7 px-2 py-1 border-gray-800 border-2">
          <h4 className="text-xl pb-1 border-b-gray-800 border-b-2">Order Summary</h4>
          <div className="mt-2 text-sm text-gray-800">
            <div className="mb-1 flex items-center justify-between">
              <span>Subtotal</span>
              <span>${5000}</span>
            </div>
            <div className="mb-1 flex items-center justify-between">
              <span className="max-w-[70%]">Address Address Address</span>
              <span>${5000}</span>
            </div>
            <div className="mb-1 pt-2 flex items-center justify-between border-b-2 border-double border-b-gray-500 pb-2 ">
              <span>Order Total</span>
              <span className="text-black font-bold">${10000.0}</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-800 font-bold">
            <p> 2 Items in Cart</p>
          <span>{">"}</span>
          </div>
          
        </div>
     );
}
 
export default Ordersum;