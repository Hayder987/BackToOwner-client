import { Link, useRouteError } from "react-router";
import errAnim from "../assets/LottieFiles/error.json";
import Lottie from "react-lottie";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const ErrorPages = () => {
  const error = useRouteError();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };


  return (
    <div className="py-24">
      <Helmet>
        <title>Error!</title>
      </Helmet>
      <div className="container flex gap-8 flex-col-reverse lg:flex-row mx-auto bg-slate-100 p-4 py-10">
        {/* image */}
        <div className="lg:w-1/2 ">
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </div>
        {/* text */}
        <div className="lg:w-1/2 py-10 md:py-16 bg-white p-6">
          <h1 className="text-center text-6xl font-bold mb-10">
            {error?.status}
          </h1>
          <h3 className="text-4xl font-bold text-center mb-6">
            {error?.statusText}
          </h3>
          <h3 className="text-3xl text-center font-bold mb-6">
            {error?.error?.message}
          </h3>
          <p className="text-xl font-medium text-center mb-14">
            It seems you have lost your way. The page you are looking for might
            have been moved, renamed, or does not exist anymore.
          </p>
          <div className="flex justify-center">
            <Link to='/'>
              <button className="bg-blue-600 flex justify-center items-center gap-3 text-white py-3 px-8 font-medium">
                <span>
                  <FaArrowLeftLong />
                </span>
                <span>Back To Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
