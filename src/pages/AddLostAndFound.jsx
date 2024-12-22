import useUpload from "../hooks/useUpload";

const AddLostAndFound = () => {
  const { handleImageChange, handleUpload, uploadedUrl } = useUpload();
  uploadedUrl;
  const postFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;

    console.log(title);
  };

  console.log(uploadedUrl);

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:max-w-[1200px] bg-white mx-auto p-4 md:p-8">
        {/* form */}
        <div className="w-full lg:w-8/12">
          <form 
          className="flex flex-col gap-6"
          onSubmit={postFormHandler}>
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
                  className="input input-bordered input-primary"
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
                    accept="image/*"
                    onChange={handleImageChange}
                    onBlur={() => handleUpload()}
                    className="file-input file-input-primary w-full "
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
                name='postType'
                className="select select-primary select-bordered w-full ">
                  <option disabled >
                   Post Type
                  </option>
                  <option value="lost">Lost</option>
                  <option value="found">Found</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select 
                name='category'
                className="select select-bordered select-primary w-full">
                  <option disabled selected>
                   Category
                  </option>
                  <option value="pets">pets</option>
                  <option value="documents">documents</option>
                  <option value="gadgets">gadgets</option>
                </select>
              </div>
            </div>
            <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                name='description' 
                className="textarea resize-none textarea-primary" placeholder="Description"></textarea>
              </div>

            <input type="submit" value="Add Post" />
          </form>
        </div>
        {/* banner */}
        <div className="w-full lg:w-4/12"></div>
      </div>
    </div>
  );
};

export default AddLostAndFound;
