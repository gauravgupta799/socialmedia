import axios from "axios"

const baseUrl = "http://localhost:8800";

const API = axios.create({baseURL:baseUrl});
export const logIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);