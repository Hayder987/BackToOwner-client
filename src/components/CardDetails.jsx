import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import { format } from "date-fns";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CardDetails = ({ post, setLoad, load }) => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [pickLocation, setpickLocation] = useState("");
  const axiosUrl = useAxiosSecure();

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
    _id,
  } = post || {};

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const dataInfo = {
      postId: _id,
      pickLocation,
      pickDate: startDate,
      recoveredName: user?.displayName,
      recoveredEmail: user?.email,
      userImage: user?.photoURL,
      title,
      thumbnail,
      owner: name,
      category,
      lostDate,
    };
    try {
      await axiosUrl.post(`/addData`, dataInfo).then(() => {
        setLoad(!load);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Information Saved SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (err) {
      Swal.fire(`${err}`);
    }
  };

  return (
    <div className="lg:max-w-[1300px] min-h-[60vh] flex gap-8 flex-col lg:flex-row mx-auto bg-white p-2 md:p-8 py-12 md:py-16">
      {/* img */}
      <div className="lg:w-1/2">
        <img
          src={thumbnail}
          alt=""
          className="w-full rounded-lg h-full object-cover"
        />
      </div>
      <div className="border-r-2 px-6"></div>
      {/* text */}
      <div className="lg:w-1/2 flex flex-col ">
        <div className="flex-1 mb-6 lg:mb-2">
          <div className="flex justify-between mb-5">
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
          <h3 className="text-2xl font-bold mb-5">{title}</h3>
          <div className="flex justify-between mb-6">
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
          <p className="mb-6">{description}</p>
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
        </div>

        {status === "found" && (
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="py-3 px-6 rounded-lg w-full bg-blue-600 text-white font-semibold"
          >
            This is Mine!
          </button>
        )}
        {status === "lost" && (
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="py-3 px-6 rounded-lg w-full bg-blue-600 text-white font-semibold"
          >
            Found This!
          </button>
        )}
        {status === "recovered" && (
          <button
            disabled
            className="py-3 hover:disabled:cursor-not-allowed px-6 w-full rounded-lg bg-green-600 text-white font-semibold"
          >
            recovered!
          </button>
        )}
      </div>
      {/* modal */}
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <h3 className="text-xl font-bold text-center my-4">
            Give Your Information
          </h3>
          <div className="p-6">
            <form onSubmit={submitFormHandler} className="flex flex-col gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Recovered location</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setpickLocation(e.target.value)}
                  name="location"
                  placeholder="where the item was lost"
                  className="input rounded-lg input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Pick Date</span>
                </label>
                <div className="border rounded-lg border-blue-600">
                  <DatePicker
                    selected={startDate}
                    className="p-3 w-full rounded-lg outline-none"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.displayName}
                  className="input rounded-lg w-full input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  readOnly
                  value={user?.email}
                  className="input rounded-lg w-full input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">ImgPath</span>
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.photoURL}
                  className="input rounded-lg w-full input-bordered input-primary"
                  required
                />
              </div>

              <button
                onClick={() => {
                  pickLocation
                    ? document.getElementById("my_modal_5").close()
                    : "";
                }}
                className="w-full my-6 rounded-lg bg-blue-600 text-white py-3 px-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

CardDetails.propTypes = {
  post: PropTypes.object,
  load: PropTypes.bool,
  setLoad: PropTypes.func,
};

export default CardDetails;
