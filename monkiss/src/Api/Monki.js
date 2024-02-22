import { axiosClient } from "./AxiosClient";

export const axiosGetMonkisPerUser = (idUser) => {
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.get(`/familiar/principal/${idUser}`)
}

export const axiosPostMonkiPerUser = (body) =>{
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.post(`/familiar/guardar`,body)
}

export const axiosUpdateMonki = (body) =>{
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.post(`/familiar/actualizar`, body);
}

export const axiosDeleteMonkiById = (idMonki) =>{
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.delete(`/familiar/eliminar/${idMonki}`);
}

export const axiosGetNacionalidades = () => {
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.get(`/nacionalidad/todos`)
}

export const axiosGetRelaciones = () => {
    axiosClient.interceptors.request.use(
        async config => {
            config.headers = {
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
            return config;
        },
        error => {
            Promise.reject(error)
    });
    return axiosClient.get(`/relacion/todos`)
}