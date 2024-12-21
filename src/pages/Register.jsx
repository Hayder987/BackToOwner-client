import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router";
import registerAnim from '../assets/LottieFiles/register.json'
import Lottie from "react-lottie";

const Register = () => {


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: registerAnim,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet"
        }
      };
    return (
        <div className="p-4 lg:p-8">
      <div className="flex p-4 rounded-xl bg-white md:p-12 gap-10 flex-col-reverse lg:flex-row lg:max-w-[1100px] mx-auto">
        {/* form */}
        <div className="lg:w-1/2  p-4 md:p-8">
          <img src={logo} alt="" className="w-16 h-16 mb-8 rounded-full" />
          <h1 className="text-xl md:text-3xl font-semibold mb-4">
            Welcome To BackToOwner
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-xl font-medium">
            Enter Your Information To
            <span className="text-blue-500"> Register</span>
          </p>
          <div className="">
          <form>
          <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Text"
                name='name'
                placeholder="Name"
                className="border border-blue-500 rounded-xl p-3 outline-none "
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="border border-blue-500 rounded-xl p-3 outline-none "
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="Text"
                name='imgPath'
                placeholder="Image Url"
                className="border border-blue-500 rounded-xl p-3 outline-none "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="border border-blue-500 rounded-xl p-3 outline-none "
                required
              />
            </div>
            <div className="form-control mt-6 mb-6">
              
              <input type="submit" value="Login" 
              className="bg-blue-500 cursor-pointer text-white font-semibold py-3 px-6 rounded-xl" />
            </div>
          </form>
           <div className="divider my-6">Or, Login with</div>
           <div className="flex justify-center mt-4">
            <button className="flex border font-semibold border-blue-500 w-full py-3 px-6 rounded-xl justify-center items-center gap-4">
                <span className="text-2xl"><FcGoogle /></span>
                Login With Google
            </button>
           </div>
           <p className="mt-6 text-center font-medium text-gray-600">
             Have An Account? 
            <Link to='/login'><span className="text-blue-600 underline cursor-pointer"> Login Now</span></Link>
           </p>
          </div>
        </div>
        {/* banner */}
        <div className="lg:w-1/2 p-4">
        <Lottie options={defaultOptions}
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