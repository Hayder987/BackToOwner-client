import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import LoaderSpinner from "../components/LoaderSpinner";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import axios from "axios";

const UpdatePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { t } = useTranslation();
  const axiosUrl = useAxiosSecure()


  useEffect(() => {
    const fetchData = async () => {
        await axiosUrl
          .get(`/item/${id}`)
          .then((res) => {
            setStartDate(res.data.lostDate)
            setPost(res.data);
            setLoading(false)
          });
      };
    fetchData();
  }, [post?.lostDate, id, axiosUrl]);

 
  const updateFormHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.postType.value;
    const category = form.category.value;
    const description = form.description.value;
    const location = form.location.value;
    const name = form.name.value;
    const email = form.email.value;

    const updateData = {
      title,
      status: type,
      category,
      description,
      location,
      name,
      email,
      lostDate: startDate,
      thumbnail:   ""
    };


    await axios
      .patch(`${import.meta.env.VITE_serverUrl}/updateItems/${id}`, updateData)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Post Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate('/managemyitem')
      })
      .catch((err) => {
        Swal.fire(`${err}`);
      });
   
  };

  return (
    <div className="p-4 md:p-8 mb-12">
      <Helmet>
        <title>Update post || BackToOwner</title>
      </Helmet>
      {
        loading? <LoaderSpinner></LoaderSpinner>:
        <div className="flex shadow-md flex-col rounded-lg lg:flex-row gap-8 lg:max-w-[1200px] bg-white mx-auto p-4 md:p-8">
        {/* form */}
        <div className="w-full lg:w-7/12">
          <h3 className="text-xl md:text-3xl mb-6 font-semibold">
            Update {post?.title}
          </h3>
          <form className="flex flex-col gap-6" onSubmit={updateFormHandler}>
            {/* title and images */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('title')}</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={post?.title}
                  placeholder={`${t('title')}`}
                  className="input input-bordered input-primary"
                  
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('upload')}</span>
                </label>
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    // onChange={handleImageChange}
                    className="file-input file-input-primary w-full "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('type')}</span>
                </label>

                {post?.status && (
                  <select
                    name="postType"
                    defaultValue={post.status}
                    className="select select-primary select-bordered w-full "
                  >
                    <option value={"recovered"} disabled>Recovered</option>
                    <option value={"lost"}>Lost</option>
                    <option value={"found"}>Found</option>
                  </select>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">{t('category')}</span>
                </label>
                {post?.category && (
                  <select
                    name="category"
                    defaultValue={post?.category}
                    className="select select-bordered select-primary w-full"
                  >
                    <option value="pets">Pets</option>
                    <option value="documents">Documents</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="homeitems">Home Items</option>
                  </select>
                )}
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">{t('description')}</span>
              </label>
              <textarea
                name="description"
                defaultValue={post?.description}
                className="textarea resize-none textarea-primary"
                placeholder="Description"
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
                  defaultValue={post?.location}
                  placeholder="where the item was lost"
                  className="input input-bordered input-primary"
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
                  className="input  w-full input-bordered input-primary"
                />
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input  w-full input-bordered input-primary"
                />
              </div>
            </div>

            <input
              type="submit"
              value={`${t('updateBtn')}`}
              className="w-full rounded-lg bg-blue-600 text-white py-3 px-6"
            />
          </form>
        </div>
        {/* banner */}
        <div className="w-full hidden lg:flex lg:w-5/12">
          <img
            src={ post?.thumbnail}
            alt=""
            className="w-full h-[100%] rounded-lg "
          />
        </div>
      </div>
      }
    </div>
  );
};

export default UpdatePage;
