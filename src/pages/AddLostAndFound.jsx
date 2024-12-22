import { useState } from "react";
import useUpload from "../hooks/useUpload";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import banner from '../assets/images/addbanner-2.jpg'

const AddLostAndFound = () => {
  const { handleImageChange, handleUpload, uploadedUrl } = useUpload();
  const [startDate, setStartDate] = useState(new Date());

  const postFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;

    console.log(title);
  };



  return (
    <div className="p-4 md:p-8 mb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:max-w-[1200px] bg-white mx-auto p-4 md:p-8">
        {/* form */}
        <div className="w-full lg:w-7/12">
        <h3 className="text-xl md:text-3xl mb-6 font-semibold">Add Lost & Found Item</h3>
          <form className="flex flex-col gap-6" onSubmit={postFormHandler}>
            {/* title and images */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input rounded-none input-bordered input-primary"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo Upload</span>
                </label>
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="file"
                    required
                    accept="image/*"
                    onChange={handleImageChange}
                    onBlur={() => handleUpload()}
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
                <select
                  name="postType"
                  required
                  className="select rounded-none select-primary select-bordered w-full "
                >
                  <option disabled>Post Type</option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  required
                  className="select rounded-none select-bordered select-primary w-full"
                >
                  <option disabled selected>
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
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea rounded-none resize-none textarea-primary"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="Location"
                  placeholder="where the item was lost"
                  className="input rounded-none input-bordered input-primary"
                  required
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

                  className="input rounded-none w-full input-bordered input-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input rounded-none w-full input-bordered input-primary"
                  required
                />
              </div>
            </div>

            <input type="submit" value="Add Post" className="w-full bg-blue-600 text-white py-3 px-6" />
          </form>
        </div>
        {/* banner */}
        <div className="w-full hidden lg:flex lg:w-5/12">
        <img src={banner} alt="" className="w-full h-[85%] " />
        </div>
      </div>
    </div>
  );
};

export default AddLostAndFound;
