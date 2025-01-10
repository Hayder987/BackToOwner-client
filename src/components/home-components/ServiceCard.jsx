import { motion } from "motion/react";

const ServiceCard = ({logo, title, desc}) => {
    return (
        <motion.div
        whileInView={{ scale: [0, 1] }} 
        transition={{ duration: 1 }} 
        viewport={{ once: false, amount: 0.5 }}
         className=" shadow-md bg-white rounded-lg p-6 flex flex-col justify-center items-center">
            <img src={logo} alt="" className="w-20 h-20 mb-3" />
            <h3 className="md:text-xl font-bold mb-4">{title}</h3>
            <p className="text-center text-gray-600">{desc}</p>
        </motion.div>
    );
};

export default ServiceCard;