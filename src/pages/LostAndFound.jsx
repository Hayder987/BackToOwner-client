import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../components/LoaderSpinner";
import Swal from "sweetalert2";
import Card from "../components/Card";
import NoData from "../components/NoData";
import { useLoaderData } from "react-router";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const LostAndFound = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("allcategory");
  const [search, setSearch] = useState("");
  // pagination
  const {count} = useLoaderData()
  const itemPerPage = 9;
  const totalPages = Math.ceil(count/itemPerPage)
  const [currentPage, setCurrentPage] = useState(0)
  const page = [...Array(totalPages).keys()]
  console.log(currentPage)
  


  try {
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`${import.meta.env.VITE_serverUrl}/getItems?search=${search}&page=${currentPage}&size=${itemPerPage}`)
          .then((res) => {
            if (filter === "allcategory") {
              setPostData(res.data);
            } else {
              const filterData = res.data.filter(
                (item) => item.category === filter
              );
              setPostData(filterData);
            }
            setLoading(false);
          });
      };
      fetchData();
    }, [filter, search, currentPage, itemPerPage]);
  } catch (err) {
    Swal.fire(`${err}`);
  }

  return (
    <div className="py-8 mb-12">
      {loading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div className="container mx-auto ">
          <div className="bg-blue-100 flex justify-between items-center py-3 px-6 mb-12 ">
            <div className="hidden md:flex"></div>
            <div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
                className="input input-bordered  w-full md:w-[350px] lg:w-[500px]"
              />
            </div>
            <div className="flex justify-end gap-10">
              <select
                onChange={(e) => setFilter(e.target.value)}
                required
                className="select select-bordered w-full"
              >
                <option disabled>Category</option>
                <option value="allcategory">All Category</option>
                <option value="pets">Pets</option>
                <option value="documents">Documents</option>
                <option value="gadgets">Gadgets</option>
                <option value="homeitems">Home Items</option>
              </select>
            </div>
          </div>
          {postData.length === 0 ? (
            <div className="p-4 md:p-8">
               <NoData></NoData>
            </div>
          ) : (
            <div className="">
              <div className="shadow-md  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4">
              {postData.map((post) => (
                <Card key={post._id} post={post}></Card>
              ))}
            </div>
            
            </div>
            
          )}
          <div className="flex justify-center mt-12 items-center gap-3">
              <button 
              onClick={()=>{
                if(currentPage>0){
                  setCurrentPage(currentPage - 1)
                }
              }}
              className="flex w-32 justify-center items-center py-2 px-5 rounded-lg  gap-2 bg-blue-600 text-white">
                <span className="text-xl"><FaArrowLeftLong /></span>
                <span className="font-semibold">Previous</span>
              </button>
              {page.map(item=>(
                <button 
                onClick={()=> setCurrentPage(item)}
                key={item} 
                className={`
                  text-xl ${currentPage===item && 'bg-orange-300'} font-semibold flex justify-center items-center
                 bg-blue-200 border-2 h-12 w-12 border-blue-50 p-3 rounded-full
                  `}
                >{item + 1}</button>
              ))}
              <button
              onClick={()=>{
                if(currentPage<page.length -1){
                  setCurrentPage(currentPage + 1)
                }
              }}
               className="flex w-32 justify-center items-center py-2 px-5 rounded-lg  gap-2 bg-blue-600 text-white">
                <span className="font-semibold">Next</span>
                <span className=" text-xl"><FaArrowRightLong /></span>
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default LostAndFound;
