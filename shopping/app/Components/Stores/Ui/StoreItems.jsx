import Image from "next/image";
import pic from "@/public/Assets/Myimg.jpeg";
const Items = () => {
  return (
    <>
      <div className="items_bg_color m-3 p-1 rounded-lg">
        <Image src={pic} alt="" className="rounded-lg" />
        <div className="relative">
          <p className=" text-md">Blouse and skirt</p>
          <div className="flex justify-start text-[50%] my-2 text-gray-500 flex-wrap">
            <span className="mr-1">
              Gene: <span>Female </span>{" "}
            </span>
            <span>
              Age: <span>Female</span>{" "}
            </span>
           
          </div>
           <p className="text-sm w">
             ${"5000"}
           </p>
          <i className="fa-solid fa-cart text-white p-5 rounded-full w-fit absolute bottom-[-15px] right-0"></i>
        </div>
      </div>
    </>
  );
};

export default Items;
