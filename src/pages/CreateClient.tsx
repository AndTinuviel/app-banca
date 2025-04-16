import { useEffect, useState } from "react";
import { createClient, getClientById, updateClient } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";


function CreateClient() {
    const { id } = useParams(); // Si estamos en modo edición
    const navigate = useNavigate();
  
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [edad, setEdad] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [estado, setEstado] = useState("ACT");
  
    // Si estamos editando, obtener los datos del cliente
    useEffect(() => {
      if (id) {
        getClientById(id).then(cliente => {
          setNombre(cliente.nombre);
          setGenero(cliente.genero);
          setEdad(cliente.edad);
          setIdentificacion(cliente.identificacion);
          setDireccion(cliente.direccion);
          setTelefono(cliente.telefono);
          setPassword(cliente.password);
          setEstado(cliente.estado);
        }).catch(console.error);
      }
    }, [id]);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const clienteData = {
        nombre,
        genero,
        edad,
        identificacion,
        direccion,
        telefono,
        password,
        estado
      };
  
      try {
        if (id) {
          await updateClient(id, clienteData);
          alert("Cliente actualizado correctamente");
        } else {
          await createClient(clienteData);
          alert("Cliente creado exitosamente");
        }
        navigate("/"); 
      } catch (error) {
        alert("Hubo un error al guardar el cliente");
        console.error(error);
      }
    };

    return (
        <div>
        <h1>Crear Cliente</h1>
        <form onSubmit={handleSubmit}>
            <table>
            <tbody>
                <tr>
                <td><label>Nombre:</label></td>
                <td>
                    <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Género:</label></td>
                <td>
                    <input
                    type="text"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Edad:</label></td>
                <td>
                    <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Identificación:</label></td>
                <td>
                    <input
                    type="text"
                    value={identificacion}
                    onChange={(e) => setIdentificacion(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Dirección:</label></td>
                <td>
                    <input
                    type="text"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Teléfono:</label></td>
                <td>
                    <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Password:</label></td>
                <td>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr>
                <td><label>Estado:</label></td>
                <td>
                    <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                    >
                    <option value="ACT">Activo</option>
                    <option value="INA">Inactivo</option>
                    </select>
                </td>
                </tr>
                <tr>
                <td colSpan={2} style={{ textAlign: "center", paddingTop: "10px" }}>
                    <button type="submit">Crear Cliente</button>
                </td>
                </tr>
            </tbody>
            </table>
        </form>
        </div>
  );
};



export { CreateClient };