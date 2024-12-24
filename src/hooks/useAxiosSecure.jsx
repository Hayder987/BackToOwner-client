import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_serverUrl}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          userLogOut().then(() => {
            Swal.fire({
              position: "top-middle",
              icon: "info",
              title: "UnAuthorized: Your get SignOut",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut]);
  return axiosInstance;
};

export default useAxiosSecure;
