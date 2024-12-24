import axios from "axios";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImTable2 } from "react-icons/im";
import Swal from "sweetalert2";
import RecoverdCard from "../components/RecoverdCard";
import LoaderSpinner from "../components/LoaderSpinner";
import RecoveredTable from "../components/RecoveredTable";
import Lottie from "react-lottie";
import noData from "../assets/LottieFiles/nodata.json";
import useAuth from "../hooks/useAuth";

const AllRecovered = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("column");
  const { user } = useAuth();
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
                  <ImTable2 />
                </button>
                <button
                  onClick={() => setMenu("column")}
                  className={`text-3xl ${menu === "column" && "text-blue-600"}`}
                >
                  <FaBars />
                </button>
              </div>
            </div>
            {
              post.length===0?<div className="p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl text-center font-semibold mb-6">
                No Data found!
              </h1>
              <div className="md:max-w-[500px] mx-auto ">
                <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
              </div>
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
