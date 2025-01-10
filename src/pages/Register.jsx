import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router";
import registerAnim from "../assets/LottieFiles/register.json";
import Lottie from "react-lottie";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { registerUser, updateUser, googleLogin } = useAuth();
  const [errorMesage, setErrorMessage] = useState("");
  const upperCase = /^(?=.*[A-Z]).+$/;
  const lowerCase = /^(?=.*[a-z]).+$/;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const destination = state || "/";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  const registerFormHandler = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imgPath = form.imgPath.value;
    const password = form.password.value;
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("Password must have 6 digits");
      return;
    }

    if (!upperCase.test(password)) {
      setErrorMessage("Password must be 1 UpperCase");
      return;
    }

    if (!lowerCase.test(password)) {
      setErrorMessage("Password must be 1 LowerCase");
      return;
    }
    try{
      await registerUser(email, password)
      await updateUser(name, imgPath);
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "User Registration SuccessFully!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      navigate(destination);
    }
    catch(err){
      Swal.fire({
        title: err.message,
        icon: "error",
        draggable: true,
      });
    }
  };

  const googleLoginHandler = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "User Registration SuccessFully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(destination);
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
    <div className="p-4 lg:p-8 mb-12">
      <Helmet>
        <title>Register || BackToOwner</title>
      </Helmet>
      <div className="flex p-4 rounded-xl bg-white md:p-12 gap-10 flex-col-reverse lg:flex-row lg:max-w-[1100px] mx-auto">
        {/* form */}
        <div className="lg:w-1/2  p-4 md:p-8">
          <img src={logo} alt="" className="w-16 h-16 mb-8 rounded-full" />
          <h1 className="text-xl md:text-3xl font-semibold mb-4">
            {t("loginHeading")}
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-xl font-medium">
            {t("registerDesc")}
          </p>
          <div className="">
            <form onSubmit={registerFormHandler}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">{t("name")}</span>
                </label>
                <input
                  type="Text"
                  name="name"
                  placeholder={`${t("name")}`}
                  className="border border-blue-600 rounded-xl p-3 outline-none "
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">{t("email")}</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={`${t("email")}`}
                  className="border border-blue-600 rounded-xl p-3 outline-none "
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">{t("photoUrl")}</span>
                </label>
                <input
                  type="Text"
                  name="imgPath"
                  placeholder={`${t("photoUrl")}`}
                  className="border border-blue-600 rounded-xl p-3 outline-none "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{t("password")}</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder={`${t("password")}`}
                  className="border border-blue-600 rounded-xl p-3 outline-none "
                  required
                />
                {errorMesage && (
                  <p className="mt-2 text-center font-semibold text-red-500">
                    {errorMesage}
                  </p>
                )}
              </div>
              <div className="form-control mt-6 mb-6">
                <input
                  type="submit"
                  value={`${t("register")}`}
                  className="bg-blue-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-xl"
                />
              </div>
            </form>
            <div className="divider my-6">{t("divider")}</div>
            <div className="flex justify-center mt-4">
              <button
                onClick={googleLoginHandler}
                className="flex border font-semibold border-blue-600 w-full py-3 px-6 rounded-xl justify-center items-center gap-4"
              >
                <span className="text-2xl">
                  <FcGoogle />
                </span>
                {t("google")}
              </button>
            </div>
            <p className="mt-6 text-center font-medium text-gray-600">
              {t("misc3")}
              <Link to="/login">
                <span className="text-blue-600 underline cursor-pointer">
                  {" "}
                  {t("misc4")}
                </span>
              </Link>
            </p>
          </div>
        </div>
        {/* banner */}
        <div className="lg:w-1/2 p-4">
          <Lottie
            options={defaultOptions}
            height={"90%"}
            width={"100%"}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
