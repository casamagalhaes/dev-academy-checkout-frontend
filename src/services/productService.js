import axios from "axios";
const URL = "https://ctmvyudxed.execute-api.us-east-1.amazonaws.com/v1/";

const getAll = () => axios.get(`${URL}/products/`);

const getById = id => axios.get(`${URL}/products/${id}`);

const deleteById = id => axios.delete(`${URL}/products/${id}`);

const save = product => {
  const token = localStorage.getItem("token");
  return axios.post(`${URL}/product/`, product, {
    headers: { Authorizaton: token }
  });
};

export default {
  getById,
  getAll,
  save,
  deleteById
};
