import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../../components/LoaderSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosUrl = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: allData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allitem", user?.email],
    queryFn: async () => {
      const { data } = await axiosUrl("/user");
      return data;
    },
  });

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const userHandler = async(email, value) => {
    await axiosUrl.patch(`/userRole/${email}?role=${value}`) 
      refetch()
  };

  const deleteHandler = (id)=>{
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
            await axiosUrl.delete(`/user/${id}`);
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-blue-100">
              <th>#</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((item, idx) => (
              <tr key={item?.idx}>
                <th>{idx + 1}</th>
                <td>{item?.email}</td>
                <td>
                  {item?.photo ? (
                    <img
                      src={item?.photo}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <h1 className="text-xl flex justify-center items-center text-blue-600 w-10 h-10 border-2 rounded-full p-3">
                      {item?.email?.slice(0, 2).toUpperCase()}
                    </h1>
                  )}
                </td>

                <td>
                  {
                    item?.email==="hayderbd4290@gmail.com"?
                    <button className="bg-slate-700 text-white uppercase px-8 py-1 rounded-full">Site Host</button>:
                    <div className="">
                      {item?.role === "admin" && (
                      <button className="bg-green-600 text-white uppercase px-8 py-1 rounded-full">
                        {item?.role}
                      </button>
                    )}
                    {item?.role === "client" && (
                      <button className="bg-blue-600 text-white uppercase px-8 py-1 rounded-full">
                        {item?.role}
                      </button>
                    )}
                    {item?.role === "requested" && (
                      <button className="bg-orange-500 text-white uppercase px-8 py-1 rounded-full">
                        Pending
                      </button>
                    )}
                    </div>
                  }
                </td>

                <td className="flex justify-center items-center gap-6">
                  <select
                    onChange={(e) => userHandler(item?.email, e.target.value)}
                    disabled={item?.role === "client" || item?.email==="hayderbd4290@gmail.com"}
                    className="select select-bordered w-full min-w-40 lg:min-w-16"
                  >
                    <option >Select Role</option>
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                  {
                    item?.email==="hayderbd4290@gmail.com"?
                    <button className=""></button>:
                    <button
                    onClick={() => deleteHandler(item?._id)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Delete"
                    className="bg-red-600 text-white p-2 rounded-md text-xl"
                  >
                    <RiDeleteBin5Fill />
                  </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
