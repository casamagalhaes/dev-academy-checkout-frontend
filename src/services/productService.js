import api from "./api";

const getAll = () => {
  return api.get("/products");
};

const getById = id => {
  return api.get(`/products/${id}`);
};

const save = data => {
  return api.post("/products", data);
};

export default {
  getAll,
  save,
  getById
};
