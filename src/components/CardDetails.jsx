import useAuth from "../hooks/useAuth";
import { format } from "date-fns";

const CardDetails = ({ post }) => {
  const { user } = useAuth();

  const {
    title,
    status,
    category,
    description,
    location,
    name,
    email,
    lostDate,
    thumbnail,
    postedDate,
  } = post || {};

  return (
    <div className="lg:max-w-[1100px] flex gap-8 flex-col lg:flex-row mx-auto bg-white p-2 md:p-8">
      {/* img */}
      <div className="lg:w-1/2">
        <img src={thumbnail} alt="" className="w-full h-full object-cover" />
      </div>
      {/* text */}
      <div className="lg:w-1/2">
        <div className="flex justify-between mb-3">
          <p>
            <span className="font-bold">Lost Date: </span>
            <span className="text-gray-600">
              {format(new Date(lostDate), "PP")}
            </span>
          </p>
          <p>
            <span className="font-bold">Posted On: </span>
            <span className="text-gray-600">
              {format(new Date(postedDate), "PP")}
            </span>
          </p>
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex justify-between mb-3">
          <p>
            <span className="font-bold">Status: </span>
            <span
              className={`${
                status === "recovered"
                  ? "text-green-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {status}
            </span>
          </p>
          <p>
            <span className="font-bold">Category: </span>
            <span className="text-gray-600">{category}</span>
          </p>
        </div>
        <p className="mb-3">{description}</p>
        <div className="flex justify-between mb-3">
          <p>
            <span className="font-bold">Name: </span>
            <span className="text-gray-600">{name}</span>
          </p>
          <p>
            <span className="font-bold">Email: </span>
            <span className="text-gray-600">{email}</span>
          </p>
        </div>
        <p className="mb-4">
          <span className="font-bold">Location: </span>
          <span className="text-gray-600">{location}</span>
        </p>
        {status === "found" && (
          <button 
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="py-3 px-6 rounded-lg w-full bg-blue-600 text-white font-semibold">
            
            This is Mine!
          </button>
        )}
        {status === "lost" && (
          <button 
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="py-3 px-6 rounded-lg w-full bg-blue-600 text-white font-semibold">
            Found This!
          </button>
        )}
        {status === "recovered" && (
          <button 
          disabled
          className="py-3 hover:disabled:cursor-not-allowed px-6 w-full rounded-lg bg-green-600 text-white font-semibold">
            
            recovered!
          </button>
        )}
      </div>
      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CardDetails;
