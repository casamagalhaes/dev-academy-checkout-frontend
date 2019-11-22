import api from "./api";

const getAll = () => {
  return api.get("/products");
};

const save = data => {
  return api.post("/products", data);
};

export default {
  getAll,
  save
};
