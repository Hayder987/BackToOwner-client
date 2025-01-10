import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth()
    const axiosUrl = useAxiosSecure()
    const {
        data: userData,
        refetch,
        isLoading,
      } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
          const { data } = await axiosUrl(`/user/${user?.email}`);
          return data;
        },
      });
    return [userData, refetch, isLoading]
};

export default useAdmin;