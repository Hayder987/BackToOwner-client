import axios from "axios";

const uploadImage = async(imgPath)=>{
    const formData = new FormData()
    formData.append('image', imgPath)
    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBApiKey}`,
        formData
      );
      return data.data.display_url;
}

export {uploadImage}