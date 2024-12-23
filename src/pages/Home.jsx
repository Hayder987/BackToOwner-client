import { useEffect, useState } from "react";
import Banner from "../components/home-components/Banner";
import RecentPost from "../components/home-components/RecentPost";
import axios from "axios";
import Swal from "sweetalert2";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);

  try {
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`${import.meta.env.VITE_serverUrl}/recentPost`)
          .then((res) => {
            setPostData(res.data);
            setLoading(false);
          });
      };
      fetchData();
    }, []);
  } catch (err) {
    Swal.fire(`${err}`);
  }

  
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <RecentPost postData={postData} loading={loading}></RecentPost>
      </div>
    </div>
  );
};

export default Home;
