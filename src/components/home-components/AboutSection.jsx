import bgBanner from "../../assets/images/aboutBg-2.webp";
import { motion } from "motion/react";
import client1 from "../../assets/images/happy.webp";
import client2 from "../../assets/images/happpy3.jpg";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-4 min-h-[100vh] lg:min-h-[60vh] flex justify-center items-center md:p-10 mb-20 lg:mb-28"
    >
      <div className="container gap-12 flex flex-col lg:flex-row mx-auto ">
        {/* text */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="">
            <motion.h1 
            whileInView={{ y: [100, 0], color: ["#07f1dc", "#0775f1"] }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-xl text-left md:text-4xl font-semibold mb-8">
              About BackToOwner
            </motion.h1>
            <motion.p 
            whileInView={{ x: [100, 0],  }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-gray-600 font-medium md:text-xl mb-6">
              Building a community where honesty and kindness thrive through
              collaboration.
            </motion.p>
            <motion.p 
            whileInView={{ x: [-150, 0],  }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="mb-6">
              BackToOwner is a platform dedicated to connecting individuals who
              have lost their valuable items with those who have found them. Our
              mission is to simplify the process of reuniting lost belongings
              with their rightful owners by providing an easy-to-use, secure,
              and efficient solution. Whether you have misplaced something
              precious or discovered an item, BackToOwner is here to help bridge
              the gap and create a community of trust and goodwill.
            </motion.p>
            <Link to='/addlostfound'><motion.button 
            whileInView={{ scale: [0, 1] }} 
            transition={{ duration: 1 }} 
            viewport={{ once: false, amount: 0.5 }} 
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg">Get Help
            </motion.button></Link>
          </div>
        </div>
        {/* img */}
        <div className="lg:w-1/2 overflow-hidden">
          <motion.img
            animate={{ y: [0, 80, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
            src={client1}
            alt=""
            className="w-full max-w-[500px] max-h-[250px] rounded-t-[32px] rounded-br-[32px] border-l-8 border-b-8 border-blue-500"
          />

          <motion.img
            animate={{ x: [250, 150, 250] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 2,
              repeatType: "loop",
            }}
            src={client2}
            alt=""
            className="w-full max-w-[450px] max-h-[250px] rounded-t-[32px] rounded-br-[32px] border-l-8 border-b-8 border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
