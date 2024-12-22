import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import LoaderSpinner from "../components/LoaderSpinner";
import CardDetails from "../components/CardDetails";


const DetailsPAge = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const [loading, setLoading]= useState(true)

   try{
    useEffect(()=>{
        fetchData()
        },[])
    
        const fetchData = ()=>{
            axios.get(`${import.meta.env.VITE_serverUrl}/item/${id}`)
            .then(res=>{
                setPost(res.data)
                setLoading(false)
            })
        }
   }
   catch(err){
     Swal.fire(`${err}`);
   }



    return (
        <div>
           {
            loading?<LoaderSpinner></LoaderSpinner>:
            <div className="p-6 md:p-12 ">
             <CardDetails post={post}></CardDetails>
            </div>
           } 
        </div>
    );
};

export default DetailsPAge;