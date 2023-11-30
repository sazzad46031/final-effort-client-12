import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'https://final-effort-server-dun.vercel.app'
})

const UseAxiosSecure = () => {
   return axiosSecure
};

export default UseAxiosSecure;