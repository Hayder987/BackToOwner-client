import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo2.png";
import { LuLogOut } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { SiIconfinder } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FiLogIn } from "react-icons/fi";

const NavBar = () => {
  const { user, userLogOut, loading } = useAuth();

  const logOutHandler = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          position: "top-middle",
          icon: "info",
          title: "User Logout SuccessFully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="flex justify-between items-center relative py-3 px-4 md:px-12">
      <div className=" flex justify-center items-center gap-2 ">
        <img
          src={logo}
          alt=""
          className="w-12 h-12 md:w-16 md:h-16  rounded-full"
        />
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-blue-500">Back</span>ToOwner
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <ul className="hidden md:flex justify-center items-center gap-10 font-medium">
          <NavLink to="/">
            <li className="flex items-center gap-1">
              <span>
                <IoHome />
              </span>
              Home
            </li>
          </NavLink>
          <NavLink to="/lostandfound">
            <li className="flex items-center gap-1">
              <span>
                <SiIconfinder />
              </span>{" "}
              Lost & Found Items
            </li>
          </NavLink>
        </ul>
        {loading ? (
          ""
        ) : (
          <div>
            {user ? (
              <div className="flex justify-center py-1 px-2 rounded-xl border border-blue-500 items-center gap-3">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="rounded-full border p-1"
                  >
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName}
                      referrerPolicy="no-referrer"
                      src={user?.photoURL}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content font-medium gap-4 menu top-16 right-0 rounded-xl bg-blue-100 
                      z-10 w-64 max-w-[300px] text-base p-4 shadow"
                  >
                    <NavLink to="/addlostfound">
                      <li>Add Lost & Found Item</li>
                    </NavLink>
                    <NavLink to="/allrecovered">
                      <li>All Recovered Items</li>
                    </NavLink>
                    <NavLink to="/managemyitem">
                      <li>Manage My Items </li>
                    </NavLink>
                  </ul>
                </div>
                <div className="">
                  <button
                    onClick={logOutHandler}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Log-Out!"
                    className="text-4xl text-blue-500"
                  >
                    <LuLogOut />
                  </button>
                </div>
              </div>
            ) : (
              <div className="">
                <Link to="/login">
                  <button className="py-3 flex items-center gap-2 px-5 rounded-lg bg-blue-600 text-white font-semibold">
                    <span className="text-xl"><FiLogIn /></span>
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
