import { CompanyDetails } from "../../lib/utils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const element = (
    <FontAwesomeIcon icon="fa-solid fa-house" className=" bg-black w-7" />
  );
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
      <section className="flex p-2">
        <h1>{BizName}</h1>
        <nav className="nav_list ">
          {nav_list.map((navs) => {
            return (
              <p key={navs.title} className="">
                <Link href="/" className="">
                  {navs.title}
                </Link>
              </p>
            );
          })}
        </nav>
       
        <div className="bg-green-50 flex">
        <div className="">
          
          <input type="text" placeholder="Search" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[3em]">
            {" "}
            
            https://fontawesome.com License -
            https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-[3em] bg-black">
            {" "}
            
            https://fontawesome.com License -
            https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
      </section>
    </>
  );
};

export default Nav;
