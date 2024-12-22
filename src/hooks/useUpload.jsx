import { useContext } from "react";
import { UtilitiesContext } from "../context/utilitiesContext";


const useUpload = () => {
    const upload = useContext(UtilitiesContext)
    return upload
};

export default useUpload;