import { useEffect, useState } from "react";
import { fetchAll } from "../services/api";
import { Link } from "react-router-dom";
import { ClientListProps } from "./ClientList.interface";


function ClientList() {
    const [clientList, setClientList] = useState<ClientListProps[]>([]);
    const API_URL_CLIENTE = "http://localhost:8090/api/clientes";

    useEffect(() => {
      fetchAll(API_URL_CLIENTE).then(setClientList).catch(console.error);
    }, []);

  
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
      <h1>Clientes</h1>

      <Link to="/Clientes/crear">
        <button>Crear Nuevo Cliente</button>
      </Link>

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
              <Link to={`/clientes/editar/${client.id}`}>
                <button>Modificar</button>
              </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export { ClientList };