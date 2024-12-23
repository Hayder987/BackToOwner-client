import { useEffect, useState } from "react";
import useUpload from "../hooks/useUpload";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const UpdatePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { user } = useAuth();
  const { handleImageChange, handleUpload, uploadedUrl } = useUpload();
  const [startDate, setStartDate] = useState(new Date());


  useEffect(() => {
    const fetchData = async () => {
        await axios
          .get(`${import.meta.env.VITE_serverUrl}/item/${id}`)
          .then((res) => {
            setStartDate(res.data.lostDate)
            setPost(res.data);
            
          });
      };
    fetchData();
  }, [post?.lostDate, id]);

 
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
      thumbnail: uploadedUrl?uploadedUrl:post?.thumbnail      ,
    };

    console.log(updateData)

   
  };

  return (
    <div className="p-4 md:p-8 mb-12">
      <div className="flex shadow-md flex-col lg:flex-row gap-8 lg:max-w-[1200px] bg-white mx-auto p-4 md:p-8">
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
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={post?.title}
                  placeholder="Title"
                  className="input rounded-none input-bordered input-primary"
                  
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo Upload</span>
                </label>
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    onMouseLeave={() => handleUpload()}
                    className="file-input rounded-none file-input-primary w-full "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Post Type</span>
                </label>

                {post?.status && (
                  <select
                    name="postType"
                    defaultValue={post.status}
                    className="select rounded-none select-primary select-bordered w-full "
                  >
                    <option value={"lost"}>Lost</option>
                    <option value={"found"}>Found</option>
                    <option value={"recovered"}>Recovered</option>
                  </select>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                {post?.category && (
                  <select
                    name="category"
                    defaultValue={post?.category}
                    className="select rounded-none select-bordered select-primary w-full"
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
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={post?.description}
                className="textarea rounded-none resize-none textarea-primary"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={post?.location}
                  placeholder="where the item was lost"
                  className="input rounded-none input-bordered input-primary"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Date Lost</span>
                </label>
                <div className="border border-blue-600">
                  <DatePicker
                    selected={startDate}
                    className="p-3 w-full outline-none"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Contact Information </span>
              </label>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  readOnly
                  value={user?.displayName}
                  className="input rounded-none w-full input-bordered input-primary"
                />
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  placeholder="Email"
                  className="input rounded-none w-full input-bordered input-primary"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Update Post"
              className="w-full bg-blue-600 text-white py-3 px-6"
            />
          </form>
        </div>
        {/* banner */}
        <div className="w-full hidden lg:flex lg:w-5/12">
          <img
            src={uploadedUrl ? uploadedUrl : post?.thumbnail}
            alt=""
            className="w-full h-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;