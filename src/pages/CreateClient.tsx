import { useState } from "react";
import { createClient } from "../services/api";


function CreateClient(){


 // Estados para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [edad, setEdad] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("ACT"); // El estado tiene por defecto "ACT"

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir que se recargue la página

    // Crear el objeto con los datos del cliente
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
      const result = await createClient(clienteData); 
      alert("Cliente creado exitosamente");
      console.log(result);
    } catch (error) {
      alert("Hubo un error al crear el cliente");
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