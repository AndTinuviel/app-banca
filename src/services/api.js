import axios from "axios";

const API_URL_CUENTAS = "http://localhost:9090/api/cuentas";
const API_URL_CLIENTE = "http://localhost:8090/api/clientes";
const API_URL_MOVIMIENTO = "http://localhost:9090/api/movimientos";

export const fetchAll = async (url) => {
  const res = await axios.get(`${url}/all`);
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
  return res.data;
};

export const createClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL_CLIENTE}/create`, clientData);
    return response.data; 
  } catch (error) {
    console.error("Error al crear cliente:", error);
    throw error; 
  }
};

export const fetchReportPDF = async (id, fechaDesde, fechaHasta) => {
  const res = await axios.get(`${API_URL_CUENTAS}/reportes/pdf/${id}`, {
    params: { fechaDesde, fechaHasta },
    responseType: "text",
  });

  try {
    const data = JSON.parse(res.data); 
    return data.pdfBase64;
  } catch (e) {
    console.error("Error al parsear respuesta JSON:", e);
    throw e;
  }
};


