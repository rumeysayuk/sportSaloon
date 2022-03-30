import apiAxios from "../lib/axios/apiAxios";

export const signin = (formData) => apiAxios.post("auth/login", formData);
export const signup = (formData) => apiAxios.post("auth/register", formData);