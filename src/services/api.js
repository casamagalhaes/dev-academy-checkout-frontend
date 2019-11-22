import axios from "axios";

const api = axios.create({
  baseURL: "https://bjllfpmnja.execute-api.us-east-1.amazonaws.com/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authenticationToken")}`
  }
});

export default api;
