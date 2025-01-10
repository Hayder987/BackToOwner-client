import { NavLink, Outlet } from "react-router";
import logo from "../assets/images/logo3.jpg";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoaderSpinner from "../components/LoaderSpinner";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const { user } = useAuth();
  const axiosUrl = useAxiosSecure();
  const [userData, refetch, isLoading] = useAdmin()

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  console.log(userData);

  const updateRoleHandler = async () => {
    axiosUrl.patch(`/userRole/${user?.email}?role=requested`);
    refetch();
  };

  return (
    <div className="py-12">
      <div className="container relative flex min-h-[calc(100vh-140px)] gap-6 mx-auto bg-white p-6 py-12 lg:py-6">
        <div className={`absolute z-10  flex lg:hidden text-2xl top-1 left-4`}>
          <button onClick={() => setSideMenu(!sideMenu)} className="">
            <RiMenuUnfoldLine />
          </button>
        </div>
        {/* aside */}
        {/* desktop */}
        <div
          className={`min-h-full hidden lg:flex lg:flex-col  lg:w-3/12 p-3 rounded-lg bg-blue-100`}
        >
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
          {userData?.role === "admin" ? (
            <div className="">
              <ul className="flex flex-col gap-6 mb-16 text-xl font-medium">
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allItems">All Items</NavLink>
                </li>
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allRecoverd">Recovered Items</NavLink>
                </li>
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allUser">All User</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="">
              <p className="">for Admin Access</p>
              <p className="">
                <span className="">email: hdradmin@gmail.com</span> <br />
                <span className="">Pass: Admin123</span>
              </p>
            </div>
          )}
          <div className="mt-10 w-full">
            {userData?.role === "admin" && (
              <button
                disabled={true}
                className="bg-gray-200 text-start text-xl text-gray-600 hover:cursor-not-allowed p-2 w-full px-4 rounded-lg"
              >
                Admin
              </button>
            )}
            {userData?.role === "requested" && (
              <button
                disabled={true}
                className="bg-gray-200 text-start text-xl text-gray-600 hover:cursor-not-allowed p-2 w-full px-4 rounded-lg"
              >
                Request Sent
              </button>
            )}
            {userData?.role === "client" && (
              <button
                onClick={updateRoleHandler}
                className="bg-white text-start text-xl p-2 px-4 rounded-lg w-full"
              >
                Request For Admin
              </button>
            )}
          </div>
        </div>
        {/* mobile */}
        <div
          className={`w-8/12 flex flex-col lg:hidden  duration-300  ${
            sideMenu
              ? "left-0 z-10 bg-blue-100 absolute top-10"
              : "-left-[600px] absolute top-10"
          } h-full  lg:w-3/12 p-3 rounded-lg bg-blue-100`}
        >
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
          {userData?.role === "admin" ? (
            <div className="">
              <ul className="flex flex-col gap-6 mb-16 text-xl font-medium">
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allItems">All Items</NavLink>
                </li>
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allRecoverd">Recovered Items</NavLink>
                </li>
                <li className="bg-white p-2 px-4 rounded-lg">
                  <NavLink to="allUser">All User</NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="">
              <p className="">for Admin Access</p>
              <p className="">
                <span className="">email: hdradmin@gmail.com</span> <br />
                <span className="">Pass: Admin123</span>
              </p>
            </div>
          )}
          <div className="mt-10 w-full">
            {userData?.role === "admin" && (
              <button
                disabled={true}
                className="bg-gray-200 text-start text-xl text-gray-600 hover:cursor-not-allowed p-2 w-full px-4 rounded-lg"
              >
                Admin
              </button>
            )}
            {userData?.role === "requested" && (
              <button
                disabled={true}
                className="bg-gray-200 text-start text-xl text-gray-600 hover:cursor-not-allowed p-2 w-full px-4 rounded-lg"
              >
                Request Sent
              </button>
            )}
            {userData?.role === "client" && (
              <button
                onClick={updateRoleHandler}
                className="bg-white text-start text-xl p-2 px-4 rounded-lg w-full"
              >
                Request For Admin
              </button>
            )}
          </div>
        </div>
        {/* content */}
        <div className="w-full lg:w-9/12 p-6 md:p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
