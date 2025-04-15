import { useEffect, useState } from "react";
import { fetchAll } from "../services/api";
import { Link } from "react-router-dom";
import { MovementListProps } from "./MovementList.interface";


function MovementList() {
    const [movementList, setMovementList] = useState<MovementListProps[]>([]);
    const API_URL_MOVIMIENTO = "http://localhost:9090/api/movimientos";

    useEffect(() => {
      fetchAll(API_URL_MOVIMIENTO).then(setMovementList).catch(console.error);
    }, []);

    const handleCreate = () => {

      alert("Crear movimiento");
    };
  

    return (

      <div>
      <h1>Movimientos</h1>

      <button onClick={handleCreate} style={{ marginBottom: "10px" }}>
        Generar Movimiento
      </button>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {movementList.map((movement) => (
            <tr key={movement.id}>
              <td>{movement.id}</td>
              <td>{movement.fecha}</td>
              <td>{movement.tipoMovimientoEnum}</td>
              <td>{movement.valor}</td>
              <td>{movement.saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export { MovementList };