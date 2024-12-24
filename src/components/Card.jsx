import { format } from 'date-fns';
import { Link } from 'react-router';
import { motion } from "motion/react";

const Card = ({post}) => {

    const {
        _id,
        title,
        description,
        location,
        lostDate,
        thumbnail,
        status
      } = post || {}
    
    return (
        <motion.div 
        whileInView={{ scale: [0, 1] }} 
        transition={{ duration: 1 }} 
        viewport={{ once: false, amount: 0.5 }}
        className="flex justify-center gap-4  border p-2 rounded-lg">
            {/* img */}
           <div className="w-1/2">
            <img src={thumbnail} alt="" className="w-full h-full object-cover rounded-lg" />
           </div> 
           {/* text */}
           <div className="w-1/2">
            <p className="text-sm font-semibold mb-2 text-gray-700">Lost Date: {format(new Date(lostDate), "PP")}</p>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm mb-2">{description.slice(0,50)}...</p>
            <h3 className="font-semibold text-sm mb-2">{location}</h3>
            <p className='mb-3'>
            <span className="font-bold">Status: </span>
            <span className={`${status==='recovered'?'text-green-600 font-semibold':'text-gray-600'}`}>{status}</span>
          </p>
            <Link to={`/items/${_id}`}><button className="py-2 rounded-lg px-4 bg-blue-600 text-white">View Details</button></Link>

           </div>
        </motion.div>
    );
};

export default Card;