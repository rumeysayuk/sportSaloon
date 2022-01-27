import axios from "axios";
import React from "react";
import {toast} from "react-toastify"

const apiAxios = axios.create({
    baseURL: "http://localhost:5000/api/",
});

//Global Error Handler
apiAxios.interceptors.response.use((response) => response, (error) => {
    toast.error(error?.response?.data?.message)
    return Promise.reject(error);
});

apiAxios.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

apiAxios.interceptors.request.use((req) => {
    const profile = localStorage.getItem("profile");

    if (profile) {
        req.user = profile;
    }
    return req;
});


export default apiAxios