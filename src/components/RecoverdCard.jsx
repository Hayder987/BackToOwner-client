import { format } from "date-fns";

const RecoverdCard = ({ post }) => {
  return (
    <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {post.map((item) => (
        <div key={item._id} 
        className="flex justify-center gap-4  border p-2 rounded-lg">
          {/* img */}
          <div className="w-1/2">
            <img
              src={item?.thumbnail}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* text */}
          <div className="w-1/2">
            <p className="text-sm font-semibold mb-2 text-gray-700">
              Lost Date: {format(new Date(item?.lostDate), "PP")}
            </p>
            <h3 className="font-bold mb-2">{item?.title}</h3>
            <p className="text-sm mb-2">
              {item?.description.slice(0, 50)}...
            </p>
            <h3 className="font-semibold text-sm mb-2">{item?.location}</h3>
            <p className="mb-2">
              <span className="font-bold">Status: </span>
              <span
               className="text-green-600 font-semibold"
              >
                {item?.status}
              </span>
            </p>
            <p className="text-sm">
                <span className="font-bold">Category: </span>
                <span className="">{item?.category}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecoverdCard;
