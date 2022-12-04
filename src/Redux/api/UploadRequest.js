import axios from "axios"

const baseUrl = "http://localhost:8800";

const API = axios.create({baseURL:baseUrl});

export const uploadImage = (data) => API.post('/upload/', data)

export const uploadPost = (data) => API.post('/post/createNewPost', data)

export const getTimelinePosts =(id) => API.get(`/post/timeline/${id}`);

export const likePost = (id, userId)=> API.put(`/post/like/${id}`, {userId:userId})