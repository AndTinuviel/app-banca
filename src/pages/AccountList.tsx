import { useEffect, useState } from "react";
import { fetchAccount } from "../services/api";
import { Link } from "react-router-dom";
import { AccountListProps } from "./AccountList.interface";


function AccountList() {
    const [accountList, setAccountList] = useState<AccountListProps[]>([]);

    console.log(accountList);

    useEffect(() => {
      fetchAccount().then(setAccountList).catch(console.error);
    }, []);

    const handleCreate = () => {

      alert("Crear nueva cuenta");
    };
  
    const handleEdit = (id: number) => {
      alert(`Editar cuenta con ID: ${id}`);
    };
  
    const handleDelete = (id: number) => {
      if (window.confirm("¿Estás seguro que quieres eliminar esta cuenta?")) {
        alert(`Eliminar cuenta con ID: ${id}`);

      }
    };

    return (

      <div>
      <h1>Cuentas</h1>

      <button onClick={handleCreate} style={{ marginBottom: "10px" }}>
        Crear Nueva Cuenta
      </button>

      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Número de Cuenta</th>
            <th>Tipo cuenta</th>
            <th>Saldo</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.numeroCuenta}</td>
              <td>{account.tipoCuenta}</td>
              <td>{account.saldoActual}</td>
              <td>{account.estado}</td>
              <td>
                <button onClick={() => handleEdit(account.id)}>Modificar</button>{" "}
                <button onClick={() => handleDelete(account.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  
  export { AccountList };