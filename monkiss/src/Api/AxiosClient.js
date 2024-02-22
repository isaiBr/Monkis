import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:8080",
    responseType:"json",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
})

export {axiosClient}