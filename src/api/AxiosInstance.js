import axios from "axios";

const AxiosInsnatce =axios.create({
    baseURL : import.meta.env.VITE_BASEURL,
    headers:{
                    "Accept-Language":"en"
                }

})

export default AxiosInsnatce; 