import axios from "axios";

const API = axios.create({
  baseURL: "https://brilliant-reverence-production-34e4.up.railway.app/api",
});

export default API;