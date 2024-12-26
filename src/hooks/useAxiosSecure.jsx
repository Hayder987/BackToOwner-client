import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_serverUrl}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
         navigate('/')
         Swal.fire({
          title: "UnAuthorized",
          text: "You need Logout And Login First",
          icon: "error"
        });
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
