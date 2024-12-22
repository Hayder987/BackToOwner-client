import { UtilitiesContext } from "../context/utilitiesContext";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UtilitiesProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  console.log(uploadedUrl);

  const IMGBB_API_KEY = import.meta.env.VITE_ImgBBApiKey;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        formData
      );
      const imageUrl = response.data.data.url;
      setUploadedUrl(imageUrl);
    } catch (error) {
      Swal.fire({
        text: `Failed to upload image. ${error}`,
        icon: "error",
        timer: 1500,
      });
    }
  };

  const utilitiesInfo = {
    handleImageChange,
    handleUpload,
    uploadedUrl

  };
  return (
    <UtilitiesContext.Provider value={utilitiesInfo}>
      {children}
    </UtilitiesContext.Provider>
  );
};

export default UtilitiesProvider;
