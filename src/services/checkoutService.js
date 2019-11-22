import axios from "axios";

const save = creditCard => {
  const token = localStorage.getItem("token");
  return axios.post("/sales", creditCard, {
    headers: {
      Authorization: token
    }
  });
};

export default {
  save
};
