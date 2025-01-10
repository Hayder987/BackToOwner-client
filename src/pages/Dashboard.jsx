import { NavLink, Outlet } from "react-router";
import logo from "../assets/images/logo3.jpg";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState } from "react";

const Dashboard = () => {
  const [sideMenu, setSideMenu] = useState(false)
  return (
    <div className="py-12">
      <div className="container relative flex min-h-[calc(100vh-140px)] gap-6 mx-auto bg-white p-6 py-12 lg:py-6">
      <div className={`absolute z-10  flex lg:hidden text-2xl top-1 left-4`}>
        <button 
        onClick={()=> setSideMenu(!sideMenu)}
        className="">
        <RiMenuUnfoldLine />
        </button>
      </div>
        {/* aside */}
        {/* desktop */}
        <div className={`min-h-full hidden lg:flex lg:flex-col  lg:w-3/12 p-3 rounded-lg bg-blue-100`}>
          <div className=" mb-16 flex justify-start items-center gap-2 ">
            <img
              src={logo}
              alt=""
              className="w-8 h-8 md:w-12 md:h-12  rounded-full"
            />
            <h1 className="text-base md:text-2xl font-bold">
              <span className="text-blue-600">Back</span>ToOwner
            </h1>
          </div>
          <div className="">
            <ul className="flex flex-col gap-6 mb-16 text-xl font-medium">
                <li className="bg-white p-2 px-4 rounded-lg"><NavLink to="allItems">All Items</NavLink></li>
                <li className="bg-white p-2 px-4 rounded-lg"><NavLink to='allRecoverd'>Recovered Items</NavLink></li>
                <li className="bg-white p-2 px-4 rounded-lg"><NavLink to="allUser">All User</NavLink></li>
            </ul>
          </div>
          <div className="mt-10">
            <button className="bg-white p-2 px-4 text-start rounded-lg text-xl font-medium w-full">Request For Admin</button>
          </div>
        </div>
        {/* mobile */}
        <div className={`w-8/12 flex flex-col lg:hidden  duration-300  ${sideMenu?"left-0 absolute top-10": "-left-96 absolute top-10"} h-full  lg:w-3/12 p-3 rounded-lg bg-blue-100`}>
          <div className=" flex justify-start items-center gap-2 ">
            <img
              src={logo}
              alt=""
              className="w-8 h-8 md:w-12 md:h-12  rounded-full"
            />
            <h1 className="text-base md:text-2xl font-bold">
              <span className="text-blue-600">Back</span>ToOwner
            </h1>
          </div>
          <div className="">
            <ul className="">
                <NavLink><li>All Items</li></NavLink>
            </ul>
          </div>
        </div>
        {/* content */}
        <div className="w-full lg:w-9/12">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
