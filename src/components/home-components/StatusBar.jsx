import { motion } from "motion/react";

const StatusBar = () => {
  return (
    <div>
      <motion.div 
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="bg-blue-600 py-12 ">
        <div className="container mx-auto grid gap-10 grid-cols-2 lg:grid-cols-4">
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">120+</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
              Per Day
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">3500+</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
              Per Month
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">112+</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
              Countries
            </p>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-5xl text-center">28K+</h1>
            <p className="text-xl font-medium text-gray-200 text-center">
              Total
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatusBar;
