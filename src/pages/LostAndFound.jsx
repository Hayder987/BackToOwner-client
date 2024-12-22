import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../components/LoaderSpinner";
import Swal from "sweetalert2";
import Card from "../components/Card";


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
        <div className="py-8 mb-12">
            {
                loading?<LoaderSpinner></LoaderSpinner>:
                <div className="container shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto bg-white p-4">
                 {
                    postData.map(post=> <Card 
                        key={post._id}
                        post={post}
                        ></Card>)
                 } 
                </div>
            }
            
        </div>
    );
};

export default LostAndFound;