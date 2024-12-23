const RecoveredTable = ({ post }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-200 text-base text-black">
              <th>Sl.</th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Status</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                    <img src={item?.thumbnail} alt="" className="w-12 h-12 rounded-full" />
                </td>
                <td>{item?.title}</td>
                <td>{item?.description.slice(0, 30)}...</td>
                <td>{item?.location}</td>
                <td>
                    <button className="bg-green-300 py-1 px-4 rounded-full">{item?.status}</button>
                </td>
                <td>{item?.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecoveredTable;
