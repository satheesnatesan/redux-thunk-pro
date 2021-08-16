//import http from "../http-common";
import axios from "axios";

const getAll = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const get = id => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const create = data => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

const update = (id, data) => {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
};

const remove = id => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

const removeAll = () => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts`);
};

const findByTitle = title => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};