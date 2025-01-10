import logo from "../../assets/images/logo3.jpg";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#acd5f0]">
      <footer className="footer flex text-black justify-center items-center bg-blue-20 px-4 py-10 md:py-16">
        <div className="flex flex-col justify-center items-center">
          {/* logo */}
          <div className="flex mb-8 justify-center items-center gap-2">
            <img src={logo} alt="" className="w-16 h-16 rounded-2xl" />
            <h1 className="text-xl md:text-3xl font-bold text-gray-800">
              <span className="text-blue-600">Back</span>ToOwner
            </h1>
          </div>
          {/* desc */}
          <p className="text-center w-full text-gray-700 md:w-9/12 lg:w-7/12 mx-auto text-xl">
            Every lost item has a story. BackToOwner helps bring those stories
            back to life. Reconnect with your cherished belongings today!
          </p>
          {/* links */}
          <div className="">
            <div className="text-4xl flex items-center gap-6 mt-8">
              <button
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/profile.php?id=100006202260978",
                    "_blank"
                  );
                }}
                className="hover:text-[#0370ff]"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() => {
                  window.open("https://github.com/Hayder987", "_blank");
                }}
                className="hover:text-[#0370ff]"
              >
                <FaGithub />
              </button>
              <button
                onClick={() => {
                  window.open("https://x.com/hayder4290", "_blank");
                }}
                className="hover:text-[#0370ff]"
              >
                <FaXTwitter />
              </button>
            </div>
          </div>
          {/* author */}
          <div className="divider"></div>
          <div className="">
            <p className="text-xl font-medium">
              &copy; {new Date().getFullYear()} All rights reserved by Hayder
              Ali
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
