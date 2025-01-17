import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo3.jpg";
import { LuLogOut } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { SiIconfinder } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { FaQuestion } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const NavBar = () => {
  const { user, userLogOut, loading } = useAuth();
  const [menu, setMenu] = useState(false);

  // translation function
  const { t, i18n } = useTranslation();
  const changeLanguage = async (lang) => {
    localStorage.setItem("lang", lang);
    await i18n.changeLanguage(lang);
  };

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
    <div className="sticky bg-slate-50  top-0 z-20 bg-opacity-60 backdrop-blur-md">
      <div className="flex justify-between items-center relative py-3 px-4 md:px-12">
        <div className=" flex justify-center items-center gap-2 ">
          <img
            src={logo}
            alt=""
            className="w-10 h-10 md:w-16 md:h-16  rounded-full"
          />
          <h1 className="text-base hidden md:text-3xl md:flex font-bold">
            <span className="text-blue-600">Back</span>ToOwner
          </h1>
        </div>

        <div className="flex lg:hidden">
          <button onClick={() => setMenu(!menu)} className="text-2xl">
            {!menu ? <AiOutlineMenuFold /> : <RxCross2 />}
          </button>
        </div>
        <div
          className={`absolute ${
            menu ? "flex" : "hidden"
          } lg:hidden z-10 top-20 w-[90%] 
      rounded-lg p-8 bg-[#040861]`}
        >
          <ul
            onClick={() => setMenu(!menu)}
            className="flex flex-col gap-4 text-white "
          >
            {/* mobile */}
            <NavLink to="/">
              <li className="flex items-center gap-1">
                <span>
                  <IoHome />
                </span>
                {t("menu1")}
              </li>
            </NavLink>
            <NavLink to="/lostandfound">
              <li className="flex items-center gap-1">
                <span>
                  <SiIconfinder />
                </span>{" "}
                {t("menu2")}
              </li>
            </NavLink>

            <NavLink to="/help">
              <li className="flex items-center gap-1">
                <span>
                  <FaQuestion />
                </span>{" "}
                FAQs
              </li>
            </NavLink>
            <NavLink to="dashboard">
              <button className="flex items-center gap-1">
                <span>
                  <MdDashboard />
                </span>{" "}
                Dashboard
              </button>
            </NavLink>
          </ul>
        </div>
        {/* desktop */}
        <div className="flex justify-center items-center gap-4">
          <ul className="hidden lg:flex justify-center items-center gap-6 font-medium">
            <NavLink to="/">
              <li className="flex items-center gap-1">
                <span>
                  <IoHome />
                </span>
                {t("menu1")}
              </li>
            </NavLink>
            <NavLink to="/lostandfound">
              <li className="flex items-center gap-1">
                <span>
                  <SiIconfinder />
                </span>{" "}
                {t("menu2")}
              </li>
            </NavLink>
            <NavLink to="/help">
              <li className="flex items-center gap-1">
                <span>
                  <FaQuestion />
                </span>{" "}
                FAQs
              </li>
            </NavLink>
            <NavLink to="dashboard">
              <button className="flex items-center gap-1">
                <span>
                  <MdDashboard />
                </span>{" "}
                Dashboard
              </button>
            </NavLink>
          </ul>
          {loading ? (
            ""
          ) : (
            <div className="flex justify-center items-center gap-4">
              <div>
                {user ? (
                  <div className="flex justify-center py-1 px-1 md:px-2 rounded-xl border border-blue-600 items-center gap-3">
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
                          className="w-5 h-5 md:w-8 md:h-8 rounded-full"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content font-medium gap-4
                     menu top-16 right-0 rounded-xl bg-blue-100 
                      z-10 w-64 max-w-[300px] text-base p-4 shadow"
                      >
                        <NavLink to="/addlostfound">
                          <li className="hover:text-blue-600 hover:underline">
                            {" "}
                            {t("menu3")}
                          </li>
                        </NavLink>
                        <NavLink to="/allrecovered">
                          <li className="hover:text-blue-600 hover:underline">
                            {t("menu4")}
                          </li>
                        </NavLink>
                        <NavLink to="/managemyitem">
                          <li className="hover:text-blue-600 hover:underline">
                            {t("menu5")}
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={logOutHandler}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Log-Out!"
                        className="text-xl md:text-3xl text-blue-600"
                      >
                        <LuLogOut />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <Link to="/login">
                      <button className="py-1 md:py-3 flex items-center gap-2 px-3 md:px-5 rounded-lg bg-blue-600 text-white font-semibold">
                        <span className="text-xl">
                          <FiLogIn />
                        </span>
                        {t("login")}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <div className="">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  defaultValue={i18n.language}
                  className="border rounded-lg outline-none font-semibold bg-transparent border-blue-600  p-2 md:p-3 "
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
