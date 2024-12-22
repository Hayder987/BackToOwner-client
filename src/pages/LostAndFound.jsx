import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../components/LoaderSpinner";
import Swal from "sweetalert2";


const LostAndFound = () => {

    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(true)

   try{
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
       await axios.get(`${import.meta.env.VITE_serverUrl}/getItems`)
       .then(res=>{
        setPostData(res.data)
        setLoading(false)
       })
    }
   }
   catch(err){
    Swal.fire(`${err}`);
   }

    console.log(postData)

    return (
        <div>
            {
                loading?<LoaderSpinner></LoaderSpinner>:
                <div className="">

                </div>
            }
            
        </div>
    );
};

export default LostAndFound;