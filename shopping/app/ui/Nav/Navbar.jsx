import { CompanyDetails } from "../../lib/utils";
import Link from "next/link";

const Nav = () => {
  const BizName = CompanyDetails.CompanyName;
  const nav_list = [
    {
      title: "Home",
      Link: "/",
    },
    {
      title: "Home",
      Link: "/",
    },
    {
      title: "contact",
      Link: "/",
    },
  ];
  return (
    <>
      <nav>
        <p>{BizName}</p>
        <ul className="nav_list">
          {nav_list.map((navs) => {
           
            return (
              <li key={navs.title}>
                <Link href="/" className=""></Link>
              </li>
            );
          })}
        </ul>
        <div className="">
          <i className="fa-solid fa-search bg-blue-800 text-white p-5 rounded-full w-fit"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="">
          <i className="fa-solid fa-cart bg-blue-800 text-white p-5 rounded-full w-fit"></i>
          <input type="text" placeholder="Cart" />
        </div>
          <div className="">
          <i className="fa-solid fa-user bg-blue-800 text-white p-5 rounded-full w-fit"></i>
          </div>
      </nav>
    </>
  );
};

export default Nav;
