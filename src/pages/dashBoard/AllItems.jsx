import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoaderSpinner from "../../components/LoaderSpinner";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllItems = () => {
  const axiosUrl = useAxiosSecure();
  const { user} = useAuth();

  const {
    data: allData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allitem", user?.email],
    queryFn: async () => {
      const { data } = await axiosUrl("/getAllItems");
      return data;
    },
  });

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosUrl.delete(`/allPostId/${id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-blue-100">
                <th>#</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Category</th>
                <th>Status</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allData?.map((item, idx) => (
                <tr key={item?.idx}>
                  <th>{idx + 1}</th>
                  <td>{item?.title}</td>
                  <td>
                    <img
                      src={item?.thumbnail}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td>{item?.category}</td>
                  <td>
                    <button
                      className={`py-1 w-32 rounded-full 
                        ${item?.status === "lost" && "bg-yellow-300"}
                        ${item?.status === "found" && "bg-blue-300"}
                        ${item?.status === "recovered" && "bg-green-300"}
                        `}
                    >
                      {item?.status}
                    </button>
                  </td>
                  <td>{item?.location}</td>
                  <td>
                    <button
                      onClick={() => deleteHandler(item?._id)}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                      className="bg-red-600 text-white p-2 rounded-md text-xl"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default AllItems;
