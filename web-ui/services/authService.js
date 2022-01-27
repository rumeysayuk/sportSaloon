import apiAxios from "../lib/axios/apiAxios";

export const signin = (formData) => apiAxios.post("users/signin", formData);
export const signup = (formData) => apiAxios.post("users/signup", formData);