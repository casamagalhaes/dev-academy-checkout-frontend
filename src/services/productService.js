import axios from "axios";
import authService from "./authService";

const URL = "https://a7k89hcqf2.execute-api.us-east-2.amazonaws.com/v1";

const getAll = () => {
  const token = authService.getAuthenticationToken();

  return axios.get(`${URL}/products`, {
    headers: { Authorization: token }
  });
};

const getById = id => {
  const token = authService.getAuthenticationToken();

  return axios.get(`${URL}/products/${id}`, {
    headers: { Authorization: token }
  });
};

const create = product => {
  const token = authService.getAuthenticationToken();

  return axios.post(`${URL}/products`, product, {
    headers: { Authorization: token }
  });
};

export default { getAll, getById, create };
