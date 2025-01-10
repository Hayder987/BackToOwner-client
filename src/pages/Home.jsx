import { useEffect, useState } from "react";
import Banner from "../components/home-components/Banner";
import RecentPost from "../components/home-components/RecentPost";
import axios from "axios";
import Swal from "sweetalert2";
import AboutSection from "../components/home-components/AboutSection";
import OurServices from "../components/home-components/OurServices";
import StatusBar from "../components/home-components/StatusBar";
import { Helmet } from "react-helmet";
import Faq from "../components/home-components/Faq";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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
      <Helmet>
        <title>Home || BackToOwner</title>
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto">
        <RecentPost postData={postData} loading={loading}></RecentPost>
      </div>
      <AboutSection></AboutSection>
      <OurServices></OurServices>
      <div className="">
      <h1 className="text-4xl font-bold text-center mb-6">
        {t("faqTitle")}
      </h1>
      <p className="md:w-7/12 mb-12 mx-auto text-center font-medium text-gray-600">
        {t("faqDes")}
      </p>
      <Faq></Faq>
      </div>
      
      <StatusBar></StatusBar>
    </div>
  );
};

export default Home;
