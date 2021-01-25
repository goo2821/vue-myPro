import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8080'
}

axios.defaults.withCredentials = true;

function getData(url) {
  return axios.get(config.baseUrl + url);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}/user/${username}.json`);
}

function setUser(user) {
  console.log(user);
  return axios.post(`${config.baseUrl}/users`, user);
}

function checkUser(user){
  console.log(user);
  return axios.post(`${config.baseUrl}/login`, user);
}

function findProductAll(page){
  return axios.get(`${config.baseUrl}/investments?page=${page}`);
}
export {
  getData,
  fetchUserInfo,
  setUser,
  checkUser,
  findProductAll,
}