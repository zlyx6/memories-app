import axios from "axios";
const url = 'http://localhost:5000/posts';
//这是后端服务器的地址

export const fetchPosts = () => axios.get(url);// axios 访问服务器，获取数据，这个地址里全是一行行的数据，由createPost加进去的
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
