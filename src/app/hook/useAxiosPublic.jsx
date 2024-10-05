import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    withCrwithCredentials: true,
  });

const useAxiosPublic = () => {
    return axiosPublic;   
}

export default useAxiosPublic
