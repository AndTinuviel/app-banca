import axios from "axios";

const API_URL = "http://localhost:9090/api/cuentas"; // Reemplazá por tu endpoint real

export const fetchAccount = async () => {
  const res = await axios.get(`${API_URL}/all`);
  return res.data;
};

export const fetchPersonById = async (id) => {
  const res = await axios.get(`${API_URL}/personas/${id}`);
  return res.data;
};


