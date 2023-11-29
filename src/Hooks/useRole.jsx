import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { getRole } from "../Auth";


const useRole = () => {
    const {user,loading} = useContext(AuthContext)
    const [role,setRole] = useState(null)
    useEffect(()=>{
        getRole(user?.email)
        .then(data => setRole(data))
    },[user])
    return [role]
};

export default useRole;