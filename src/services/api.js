import axios from "axios";

const API_URL_CUENTAS = "http://localhost:9090/api/cuentas";
const API_URL_CLIENTE = "http://localhost:8090/api/clientes";
const API_URL_MOVIMIENTO = "http://localhost:9090/api/movimientos";

export const fetchAccount = async () => {
  const res = await axios.get(`${API_URL_CUENTAS}/all`);
  return res.data;
};

export const fetchClient = async () => {
  const res = await axios.get(`${API_URL_CLIENTE}/all`);
  return res.data;
};

export const fetchMovement = async () => {
  const res = await axios.get(`${API_URL_MOVIMIENTO}/all`);
  console.log(res);
  return res.data;
};

export const fetchReport = async (id, fechaDesde, fechaHasta) => {
  const res = await axios.get(
    `${API_URL_CUENTAS}/reportes/${id}`,
    {
      params: {
        fechaDesde,
        fechaHasta
      }
    }
  );
  console.log(res);
  return res.data;
};

export const fetchPersonById = async (id) => {
  const res = await axios.get(`${API_URL_CUENTAS}/personas/${id}`);
  return res.data;
};


