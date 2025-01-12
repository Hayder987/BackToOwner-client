import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_serverUrl}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {userLogOut} = useAuth()
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.status === 401 || error.status === 403) {
      await  navigate('/')
      await userLogOut()
      Swal.fire({
        title: "UnAuthorized Access",
        text: "You get Logout ",
        icon: "error"
      });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
