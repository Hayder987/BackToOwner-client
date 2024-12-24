import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../components/LoaderSpinner";
import Swal from "sweetalert2";
import Card from "../components/Card";

const LostAndFound = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("allcategory")
  const [search, setSearch] = useState("")

  console.log(filter, search)

  try {
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`${import.meta.env.VITE_serverUrl}/getItems?search=${search}`)
          .then((res) => {
            if(filter==="allcategory"){
              setPostData(res.data);
              
            }
            else{
              const filterData = res.data.filter(item=> item.category === filter)
              setPostData(filterData) 
            }
            setLoading(false);
          });
      };
      fetchData();
    }, [filter, search]);
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
            <div className="hidden md:flex">
              
            </div>
            <div>
              <input
               onChange={(e)=>setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
                className="input input-bordered  w-full md:w-[350px] lg:w-[500px]"
              />
            </div>
            <div className="flex justify-end gap-10">
              <select
                onChange={(e)=>setFilter(e.target.value)}
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
          <div className="shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4">
            {postData.map((post) => (
              <Card key={post._id} post={post}></Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LostAndFound;
