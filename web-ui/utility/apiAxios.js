import axios from 'axios';
import {toast} from 'react-toastify';

const apiAxios = axios.create({
   baseURL: 'http://localhost:5000/api'
});

apiAxios.interceptors.request.use((req) => {
   const token = localStorage.getItem("token");
   if (token) {
      req.headers.Authorization = `Bearer ${token}`;
   }
   return req;
});

apiAxios.interceptors.response.use((response) => response, (error) => {
   if (error?.response?.data?.message) {
      toast.error(error.response.data.message)
   } else {
      toast.error("Beklenmeyen bir hata oluştu.Lütfen daha sonra tekrar deneyiniz!")
   }
   const unauthorized = error.response && error.response.status
      && (error.response.status === 401 || error.response.status === 403)
   if (unauthorized) {
      localStorage.removeItem("token")
      setTimeout(() => {
         window.location.replace(`${window.location.origin}/signin`)
      }, 1000)
   }
   return Promise.reject(error)
})

export default apiAxios