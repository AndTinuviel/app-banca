import { useEffect, useState } from "react";
import { fetchClient } from "../services/api";
import { Link } from "react-router-dom";
import { ClientListProps } from "./ClientList.interface";


function ClientList() {
    const [clientList, setClientList] = useState<ClientListProps[]>([]);

    console.log(clientList);

    useEffect(() => {
      fetchClient().then(setClientList).catch(console.error);
    }, []);

    const handleCreate = () => {

      alert("Crear nuevo cliente");
    };
  
    const handleEdit = (id: number) => {
      alert(`Editar cliente con ID: ${id}`);
    };
  
    const handleDelete = (id: number) => {
      if (window.confirm("¿Estás seguro que quieres eliminar este cliente?")) {
        alert(`Eliminar cliente con ID: ${id}`);

      }
    };

    return (

      <div>
      <h1>Cuentas</h1>

      <button onClick={handleCreate} style={{ marginBottom: "10px" }}>
        Crear Nuevo Cliente
      </button>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {clientList.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nombre}</td>
              <td>{client.identificacion}</td>
              <td>{client.direccion}</td>
              <td>{client.telefono}</td>
              <td>{client.estado}</td>
              <td>
                <button onClick={() => handleEdit(client.id)}>Modificar</button>{" "}
                <button onClick={() => handleDelete(client.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export { ClientList };