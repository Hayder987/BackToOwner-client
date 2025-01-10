
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import banner from '../assets/images/loastBanner2.png'
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { uploadImage } from "../api/utilities";

const AddLostAndFound = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth()
  const axiosUrl = useAxiosSecure()
  const { t } = useTranslation();
  const [imgPath, setImgPath] = useState(null)
  const [loading, setLoading] = useState(false)
  const [imgPreview, setImgPreview] = useState('')

  useEffect(() => {
    if (imgPath) {
      const imageURL = URL.createObjectURL(imgPath);
      setImgPreview(imageURL);
      return () => URL.revokeObjectURL(imageURL);
    }
  }, [imgPath, setImgPreview]);


  const postFormHandler = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.postType.value;
    const category = form.category.value;
    const description = form.description.value;
    const location = form.location.value;
    const name = form.name.value;
    const email = form.email.value;
    const today = new Date()
    setLoading(true)
    const photo = await uploadImage(imgPath)

    const postData ={
      title,
      status:type,
      category,
      description,
      location,
      name,
      email,
      lostDate:startDate,
      thumbnail:photo,
      postedDate : today
    }

    await axiosUrl.post(`/addItems`, postData)
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Post Send Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset()
      setStartDate(new Date())
      setImgPath(null)
      setLoading(false)
    })
    .catch(err=>{
      Swal.fire(`${err}`);
    })
    
  };



  return (
    <div className="p-4 md:p-8 mb-12">
      <Helmet>
        <title>Add Post || BackToOwner</title>
      </Helmet>
      <div className="flex shadow-md flex-col rounded-lg lg:flex-row gap-8 lg:max-w-[1200px] bg-white mx-auto p-4 md:p-8">
        {/* form */}
        <div className="w-full lg:w-7/12">
        <h3 className="text-xl md:text-3xl mb-6 font-semibold">
          {t('addPostHader')}</h3>
          <form className="flex flex-col gap-6" onSubmit={postFormHandler}>
            {/* title and images */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('title')}</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder={`${t('title')}`}
                  className="input input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className=" flex justify-start flex-col">
                <div className="border-dashed p-1 rounded-lg mt-8 border-2 border-blue-600">
                   <p className="cursor-pointer text-center bg-blue-600 rounded-lg text-white p-2">
                    Upload Image
                   </p>
                 </div>
                    <input
                    type="file"
                    required
                    accept="image/*"
                    onChange={(e)=> setImgPath(e.target.files[0])}
                    className="file-input hidden file-input-primary w-full "
                  />
                </label>
                
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('type')}</span>
                </label>
                <select
                  name="postType"
                  required
                  className="select select-primary select-bordered w-full "
                >
                  <option disabled>Post Type</option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('category')}</span>
                </label>
                <select
                  name="category"
                  required
                  className="select select-bordered select-primary w-full"
                >
                  <option disabled>
                    Category
                  </option>
                  <option value="pets">Pets</option>
                  <option value="documents">Documents</option>
                  <option value="gadgets">Gadgets</option>
                  <option value="homeitems">Home Items</option>
                </select>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">{t('description')}</span>
              </label>
              <textarea
                name="description"
                className="textarea resize-none textarea-primary"
                placeholder={`${t('description')}`}
                required
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('location')}</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder={`${t('locationDesc')}`}
                  className="input rounded-lg input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('getDate')}</span>
                </label>
                <div className="border rounded-lg border-blue-600">
                  <DatePicker
                    selected={startDate}
                    className="p-3 w-full rounded-lg outline-none"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">{t('contact')} </span>
              </label>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  readOnly
                  value={user?.displayName}
                  className="input w-full input-bordered input-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input w-full input-bordered input-primary"
                  required
                />
              </div>
            </div>
            <p className="text-center text-blue-600">{loading? "Uploading....": ""}</p>
            <input type="submit" value={`${t('addBtn')}`} className="w-full cursor-pointer rounded-lg bg-blue-600 text-white py-3 px-6" />
            
          </form>
        </div>
        {/* banner */}
        <div className="w-full hidden lg:flex lg:w-5/12">
        <img src={imgPath?imgPreview:banner} alt="" className={`w-full  rounded-lg `} />
        </div>
      </div>
    </div>
  );
};

export default AddLostAndFound;
