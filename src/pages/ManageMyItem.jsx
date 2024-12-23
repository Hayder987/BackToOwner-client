import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

const ManageMyItem = () => {
  const { user } = useAuth();
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  try {
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      await axios
        .get(`${import.meta.env.VITE_serverUrl}/userData/${user?.email}`)
        .then((res) => {
          setPostData(res.data);
          setLoading(false);
        });
    };
  } catch (err) {
    Swal.fire(`${err}`);
  }

  return (
    <div className="p-4 md:p-8">
      <div className="container mx-auto bg-white shadow-lg p-6">
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
             
              {
                postData.map((post, idx)=>(
                    <tr key={post?._id}>
                <th>
                  {idx + 1}
                </th>
                <td>
                  <img src={post?.thumbnail} alt="" className="w-12 h-12 rounded-full" />
                </td>
                <td>
                  {post?.title}
                </td>
                <td>
                    <button className={`py-1 w-32 rounded-full 
                        ${post?.status==='lost' && 'bg-yellow-300'}
                        ${post?.status==='found' && 'bg-blue-300'}
                        ${post?.status==='recovered' && 'bg-green-300'}
                        `}>
                    {post?.status}
                    </button>   
                </td>
                 <td>
                    {format(new Date(post?.lostDate), "PP")}
                 </td>
                 <td>
                    {format(new Date(post?.postedDate), "PP")}
                 </td>
                 <td className="flex justify-start gap-3">
                    <button 
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content='Edit'
                    className="bg-blue-600 text-white p-2 rounded-md text-xl"><FaEdit /></button>
                    <button
                    
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content='Delete' 
                    className="bg-red-600 text-white p-2 rounded-md text-xl"><RiDeleteBin5Fill /></button>
                 </td>
               
              </tr>
                ))
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyItem;
