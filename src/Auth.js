import { axiosSecure } from "./Hooks/UseAxiosSecure"

export const getRole = async email =>{
    const {data} = await axiosSecure(`/users/${email}`)
    return data.role
}