
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import LoaderSpinner from "../components/LoaderSpinner";
import CardDetails from "../components/CardDetails";
import useAxiosSecure from "../hooks/useAxiosSecure";


const DetailsPAge = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading]= useState(true)
    const [load, setLoad] = useState(false)
    const axiosUrl = useAxiosSecure()

   try{
    useEffect(()=>{
        const fetchData = ()=>{
            axiosUrl.get(`/item/${id}`)
            .then(res=>{
                setPost(res.data)
                setLoading(false)
            })
        }
        fetchData()
        },[load, id, axiosUrl])
    
       
   }
   catch(err){
     Swal.fire(`${err}`);
   }


    return (
        <div>
           {
            loading?<LoaderSpinner></LoaderSpinner>:
            <div className="p-6 md:p-12 ">
             <CardDetails 
             post={post}
             load={load}
             setLoad={setLoad}

             ></CardDetails>
            </div>
           } 
        </div>
    );
};

export default DetailsPAge;