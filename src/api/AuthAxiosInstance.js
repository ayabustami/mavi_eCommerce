import axios from "axios";
import { UseAuthStore } from "../store/UseAuthStore";


const AuthAxiosInsnatce =axios.create({
    baseURL : import.meta.env.VITE_BASEURL,
    headers:{
                    "Accept-Language":"en"
                }

});
AuthAxiosInsnatce.interceptors.request.use((config)=>{
    const token = UseAuthStore.getState().Token;

    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config; },
    (error) => {
        return Promise.reject(error);
    }

)

export default AuthAxiosInsnatce; 