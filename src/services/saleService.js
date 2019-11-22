import api from "./api";

const save = creditCard => api.post("/sales", creditCard);

export default {
  save
};
