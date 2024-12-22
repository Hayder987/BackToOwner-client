import { format } from 'date-fns';

const Card = ({post}) => {

    const {
        title,
        status,
        category,
        description,
        location,
        name,
        email,
        lostDate,
        thumbnail
      } = post || {}
    
    return (
        <div className="flex justify-center gap-4  border p-2">
            {/* img */}
           <div className="w-1/2">
            <img src={thumbnail} alt="" className="w-full  min-h-[180px] max-h-full object-cover" />
           </div> 
           {/* text */}
           <div className="w-1/2">
            <p className="text-sm font-semibold mb-2 text-gray-700">Lost Date: {format(new Date(lostDate), "PP")}</p>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm font-medium mb-2">{description.slice(0,50)}...</p>
            <h3 className="font-bold mb-4">{location}</h3>
            <button className="py-2 px-4 bg-blue-600 text-white">View Details</button>

           </div>
        </div>
    );
};

export default Card;