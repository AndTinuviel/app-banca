import { useEffect, useState } from "react";
import { fetchReport, fetchReportPDF } from "../services/api";
import { Link } from "react-router-dom";
import { ReportListProps } from "./ReportList.interface";


function ReportList() {
    const [reportList, setReportList] = useState<ReportListProps[]>([]);
    const [pdfBase64, setPdfBase64] = useState<string | null>(null);

    useEffect(() => {
      const id = 3;
      const dateFrom = '2025-04-01T00:00:00';
      const dateTo = '2025-04-13T23:59:59';
  
      fetchReport(id, dateFrom, dateTo)
        .then(setReportList)
        .catch(console.error);
    }, []);

    const generarYDescargarPdf = async () => {
      const id = 3;
      const dateFrom = '2025-04-01T00:00:00';
      const dateTo = '2025-04-13T23:59:59';
      
      try {
        const base64 = await fetchReportPDF(id, dateFrom, dateTo);
        setPdfBase64(base64);

        console.log(base64);
  
        const link = document.createElement("a");
        link.href = `data:application/pdf;base64,${base64}`; 
        link.download = "reporte.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
      } catch (error) {
        console.error("Error generando PDF:", error);
      }
    };


    return (

      <div>
      <h1>Reporte</h1>

      <button onClick={generarYDescargarPdf}>
        Generar y Descargar PDF
      </button>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Número de cuenta</th>
            <th>Tipo de cuenta</th>
            <th>Saldo inicial</th>
            <th>Saldo actual</th>
            <th>Saldo estado</th>
            <th>Saldo movimiento</th>
            <th>Código cliente</th>
          </tr>
        </thead>
        <tbody>
          {reportList.map((report) => (
            <tr key={report.id}>
              <td>{report.numeroCuenta}</td>
              <td>{report.tipoCuenta}</td>
              <td>{report.saldoInicial}</td>
              <td>{report.saldoActual}</td>
              <td>{report.saldoActual}</td>
              <td>{report.estado}</td>
              <td>{report.cliente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export { ReportList };