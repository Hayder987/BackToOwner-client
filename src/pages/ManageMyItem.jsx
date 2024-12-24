import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import LoaderSpinner from "../components/LoaderSpinner";
import noData from '../assets/LottieFiles/nodata.json'
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router";

const ManageMyItem = () => {
  const { user } = useAuth();
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: noData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  try {
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`${import.meta.env.VITE_serverUrl}/userData?email=${user?.email}`)
          .then((res) => {
            setPostData(res.data);
            setLoading(false);
          });
      };
      fetchData();
    }, [user?.email]);
    
  } catch (err) {
    Swal.fire(`${err}`);
  }

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${import.meta.env.VITE_serverUrl}/postId/${id}`)
          .then(() => {
              const remaing = postData.filter(item=> item._id !== id)
              setPostData(remaing)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="p-4 md:p-8 mb-12">
      {
        loading? <LoaderSpinner></LoaderSpinner>:
        <div className="container mx-auto bg-white shadow-lg p-6">
        {postData.length===0?
        <div className="p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl text-center font-semibold mb-6">No Data found!</h1>
            <div className="md:max-w-[500px] mx-auto ">
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </div>
            <p className="text-center text-xl text-gray-600 font-semibold">
                <span>To Add Your Post ?</span>
                <Link to='/addlostfound'><span className="text-blue-600 underline cursor-pointer"> Click Here</span></Link> 
            </p>
        </div>:
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-blue-200 text-black">
                <th> Sl.</th>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Status</th>
                <th>Lost Date</th>
                <th>Posted On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {postData.map((post, idx) => (
                <tr key={post?._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <img
                      src={post?.thumbnail}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td>{post?.title}</td>
                  <td>
                    <button
                      className={`py-1 w-32 rounded-full 
                        ${post?.status === "lost" && "bg-yellow-300"}
                        ${post?.status === "found" && "bg-blue-300"}
                        ${post?.status === "recovered" && "bg-green-300"}
                        `}
                    >
                      {post?.status}
                    </button>
                  </td>
                  <td>{format(new Date(post?.lostDate), "PP")}</td>
                  <td>{format(new Date(post?.postedDate), "PP")}</td>
                  <td className="flex justify-start gap-3">
                    <button
                      onClick={()=> navigate(`/updateItems/${post?._id}`)}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Edit"
                      className="bg-blue-600 text-white p-2 rounded-md text-xl"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteHandler(post?._id)}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                      className="bg-red-600 text-white p-2 rounded-md text-xl"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        }
      </div>
      }
    </div>
  );
};

export default ManageMyItem;
