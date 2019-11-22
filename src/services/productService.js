import axios from "axios";

const token = localStorage.getItem("token");

const getAll = () => {
  return axios.get("/products", {
    headers: {
      Authorization: token
    }
  });
};

const save = product => {
  return axios.post("/products", product, {
    headers: {
      Authorization: token
    }
  });
};

export default {
  getAll,
  save
};
