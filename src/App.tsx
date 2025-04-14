import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClientList } from './pages/ClientList';
import { AccountList } from './pages/AccountList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Clientes</Link></li>
            <li><Link to="/Cuentas">Cuentas</Link></li>
            <li><Link to="/Movimientos">Movimientos</Link></li>
            <li><Link to="/Reprotes">Reportes</Link></li>
          </ul>
        </nav>
    
        <main className="content">
          <Routes>
            <Route path="/" element={<ClientList />} />
            <Route path="/Cuentas" element={<AccountList />} />
            <Route path="/Cuentas" element={<AccountList />} />
            <Route path="/Cuentas" element={<AccountList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
