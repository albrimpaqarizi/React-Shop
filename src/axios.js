import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://react-app-38414.firebaseio.com",
  //baseURL: "https://jsonplaceholder.typicode.com",
});

export default instanceAxios;
