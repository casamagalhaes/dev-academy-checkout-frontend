import axios from "axios";
const URL = "https://ctmvyudxed.execute-api.us-east-1.amazonaws.com/v1/";

const getAll = () => axios.get(`${URL}/sales/`);

const getById = id => axios.get(`${URL}/sales/${id}`);

const deleteById = id => axios.delete(`${URL}/sales/${id}`);

const save = creditCard => {
  const token = localStorage.getItem("token");
  return axios.post(`${URL}/sales`, creditCard, {
    headers: { Authorization: token }
  });
};

export default {
  getAll,
  getById,
  save,
  deleteById
};
