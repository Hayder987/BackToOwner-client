import { format } from "date-fns";

const RecoverdCard = ({ post }) => {
  return (
    <div className="grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {post.map((item) => (
        <div
          key={item._id}
          className="flex justify-center gap-4  border p-2 rounded-lg"
        >
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
            <p className="text-sm font-semibold mb-1 text-gray-700">
              Lost Date: {format(new Date(item?.lostDate), "PP")}
            </p>
            <h3 className="font-bold mb-1">{item?.title}</h3>
            <h3 className="text-sm mb-1">
              <span className="font-bold">Pick Location:</span>{" "}
              {item?.pickLocation}
            </h3>
            <p className="text-sm mb-1 text-gray-700">
              <span className="font-bold">Pick Date:</span>{" "}
              {format(new Date(item?.pickDate), "PP")}
            </p>
            <p className="text-sm mb-1">
              <span className="font-bold">Category: </span>
              <span className="">{item?.category}</span>
            </p>
            <p className="text-sm mb-1">
              <span className="font-bold">Owner: </span>
              <span className="">{item?.owner}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecoverdCard;
