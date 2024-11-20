import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login/login";
import Inventario_AA from "./pages/Inventarios/AA";
import Inventario_Luminarias from "./pages/Inventarios/Luminarias";
import Inventario_Miscelaneos from "./pages/Inventarios/Miscelaneos";
import Add_AA from "./pages/Inventarios/AA/form_add";
import Add_Luminaria from "./pages/Inventarios/Luminarias/form_add";
import Add_Miscelaneo from "./pages/Inventarios/Miscelaneos/form_add";
import Users from "./pages/Users";
import Users_Inactivos from "./pages/Users/inactivos";
import Add_User from "./pages/Users/add_user";
import Bitacora_Inventario from "./pages/Inventarios/Historial";
import Indicadores_inventarios from "./pages/Indicadores";
import Email_Pass_Reset from "./pages/Login/Reset/email";
import Security_Code from "./pages/Login/Reset/code_security";
import New_Password from "./pages/Login/Reset/reset_pass";
import Area from "./pages/UR/Area";
import Edificio from "./pages/UR/Edificio";
import Unidad from "./pages/UR/Unidad";
import Subestaciones from "./pages/Subestaciones";

function AppContent() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login" || location.pathname === "/reset-password" || 
                       location.pathname === "/code-security" || location.pathname === "/new_password";

  return (
    <>
      {!isLoginRoute && <Header />}
      <div className="main d-flex">
        {!isLoginRoute && (
          <div className="sidebarWrapper">
            <Sidebar />
          </div>
        )}
        <div className={`content ${isLoginRoute ? "full-width" : ""}`}>
          <Routes>
            {/* Redirigir la raíz al login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Inicio" element={<Dashboard />} />
            <Route path="/Aires_Acondicionados" element={<Inventario_AA />} />
            <Route path="/agregar_AA" element={<Add_AA />} />
            <Route path="/Luminarias" element={<Inventario_Luminarias />} />
            <Route path="/agregar_Luminaria" element={<Add_Luminaria />} />
            <Route path="/Miscelaneos" element={<Inventario_Miscelaneos />} />
            <Route path="/agregar_Miscelaneo" element={<Add_Miscelaneo />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/usuarios_baja" element={<Users_Inactivos />} />
            <Route path="/agregar_usuario" element={<Add_User />} />
            <Route path="/Bitacora_de_inventarios" element={<Bitacora_Inventario />} />
            <Route path="/Indicadores_inventarios" element={<Indicadores_inventarios />}></Route>
            <Route path="/area" element={<Area />}></Route>
            <Route path="/edificio" element={<Edificio />}></Route>
            <Route path="/unidad_responsable" element={<Unidad />}></Route>
            <Route path="/subestaciones" element={<Subestaciones />}></Route>
            <Route path="/reset-password" element={<Email_Pass_Reset />} />
            <Route path="/code-security" element={<Security_Code />}></Route>
            <Route path="/new_password" element={<New_Password />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
