import axios from "axios";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import RecoverdCard from "../components/RecoverdCard";
import LoaderSpinner from "../components/LoaderSpinner";
import RecoveredTable from "../components/RecoveredTable";
import useAuth from "../hooks/useAuth";
import NoData from "../components/NoData";
import { CgMenuGridR } from "react-icons/cg";

const AllRecovered = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("column");
  const { user } = useAuth();

  try {
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(
            `${import.meta.env.VITE_serverUrl}/allRecovered?email=${
              user?.email
            }`
          )
          .then((res) => {
            setPost(res.data);
            setLoading(false);
          });
      };
      fetchData();
    }, [user?.email]);
  } catch (err) {
    Swal.fire(`${err}`);
  }

  return (
    <div className="p-4 md:p-8 mb-12">
     <div className="container mx-auto bg-white p-4 md:p-8">
        {loading ? (
          <LoaderSpinner></LoaderSpinner>
        ) : (
          <div className="">
            <div className="bg-blue-100 flex justify-between items-center py-3 px-6 mb-12 rounded-lg">
              <h1 className="text-gray-600 font-semibold">
                All Recovered: {post.length}
              </h1>
              <div className="flex justify-end gap-10">
                <button
                  onClick={() => setMenu("table")}
                  className={`text-3xl ${menu === "table" && "text-blue-600"}`}
                >
                 <FaBars /> 
                </button>
                <button
                  onClick={() => setMenu("column")}
                  className={`text-4xl ${menu === "column" && "text-blue-600"}`}
                >
                  <CgMenuGridR />
                </button>
              </div>
            </div>
            {
              post.length===0?<div className="p-4 md:p-8">
              <NoData></NoData>
            </div>:
            <div>
            {menu === "column" && <RecoverdCard post={post}></RecoverdCard>}
            {menu === "table" && (
              <RecoveredTable post={post}></RecoveredTable>
            )}
          </div>

            }
          </div>
        )}
      </div>

       
    </div>
  );
};

export default AllRecovered;
