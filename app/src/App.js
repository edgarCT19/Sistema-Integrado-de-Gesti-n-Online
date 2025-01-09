import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Importaciones de componentes
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
import Tarifa from "./pages/Tarifas";
import Add_TAR from "./pages/Tarifas/form_add";
import Bitacora_Inventario from "./pages/Inventarios/Historial";
import Indicadores_inventarios from "./pages/Indicadores";
import Email_Pass_Reset from "./pages/Login/Reset/email";
import Security_Code from "./pages/Login/Reset/code_security";
import New_Password from "./pages/Login/Reset/reset_pass";
import Area from "./pages/UR/Area";
import Edificio from "./pages/UR/Edificio";
import Unidad from "./pages/UR/Unidad";
import Subestaciones from "./pages/Subestaciones";
import Tabla_GDMTO from "./pages/Facturas/GDMTO";
import Tabla_GDBT from "./pages/Facturas/GDBT";
import Tabla_GDMTH from "./pages/Facturas/GDMTH";
import Tabla_PDBT from "./pages/Facturas/PDBT";

import Loading from "./components/Loading";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import BitacoraUE from "./pages/Reports/Bitacoras";
import Analithycs_Energy from "./pages/Reports/Bitacoras/analisisConsumo";
import GlobalIndicator from "./pages/Indicadores/IndicadorGlobal";
import Periodo_nuevo_inventario from "./pages/Inventarios/Historial/form_add";
import Add_UR from "./pages/UR/Unidad/form_add";
import Add_Edificio from "./pages/UR/Edificio/form_add";
import Add_Area from "./pages/UR/Area/form_add";
import Add_Subestacion from "./pages/Subestaciones/add_form";
import Linea_Base from "./pages/LineaBase";

function AppContent() {
  const location = useLocation();
  const isLoginRoute =
    location.pathname === "/login" ||
    location.pathname === "/reset-password" ||
    location.pathname === "/code-security" ||
    location.pathname === "/new_password" ||
    location.pathname === "/cargando";

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
            {/* Redirigir raíz al login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            {/* Reset password */}
            <Route path="/reset-password" element={<Email_Pass_Reset />} />
            <Route path="/code-security" element={<Security_Code />} />
            <Route path="/new_password" element={<New_Password />} />
            {/* Homepages y/o páginas de inicio */}
            <Route path="/Inicio" element={<Dashboard />} />
            {/* Inventarios */}
            <Route path="/Aires_Acondicionados" element={<Inventario_AA />} />
            <Route path="/agregar_AA" element={<Add_AA />} />

            <Route path="/Luminarias" element={<Inventario_Luminarias />} />
            <Route path="/agregar_Luminaria" element={<Add_Luminaria />} />

            <Route path="/Miscelaneos" element={<Inventario_Miscelaneos />} />
            <Route path="/agregar_Miscelaneo" element={<Add_Miscelaneo />} />
            {/* Historial o bitacora de inventarios */}
            <Route path="/Bitacora_de_inventarios" element={<Bitacora_Inventario />} />
            <Route path="/nuevo_periodo_de_inventario" element={<Periodo_nuevo_inventario></Periodo_nuevo_inventario>} />
            {/* Reportes */}
            <Route path="/bitacora_de_uso_eficiente" element={<BitacoraUE />} />
            <Route path="/analisis_de_consumo" element={<Analithycs_Energy />} />
            {/* Altas y bajas de usuarios */}
            <Route path="/usuarios" element={<Users />} />
            <Route path="/usuarios_baja" element={<Users_Inactivos />} />
            <Route path="/agregar_usuario" element={<Add_User />} />
            {/* tarifas*/}
            <Route path="/tarifas" element={<Tarifa />} />
            <Route path="/agregar_tarifa" element={<Add_TAR />} />
            {/* Facturas */}
            <Route path="/Tabla_GDMTO" element={<Tabla_GDMTO />} />
            <Route path="/Tabla_GDMTH" element={<Tabla_GDMTH />} />
            <Route path="/Tabla_GDBT" element={<Tabla_GDBT/>} />
            <Route path="/Tabla_PDBT" element={<Tabla_PDBT />} />
            {/* Indicadores */}
            <Route path="/Indicadores_inventarios" element={<Indicadores_inventarios />} />
            <Route path="/Indicadores_globales" element={<GlobalIndicator />} />
            {/* Unidad Responsable */}
            {/* Area */}
            <Route path="/area" element={<Area />} />
            <Route path="/agregar_area" element={<Add_Area />} />
            {/* Area */}
            <Route path="/edificio" element={<Edificio />} />
            <Route path="/agregar_edificio" element={<Add_Edificio />} />
            {/* Area */}
            <Route path="/unidad_responsable" element={<Unidad />} />
            <Route path="/unidad" element={<Add_UR />} />
            {/* Subestaciones */}
            <Route path="/subestaciones" element={<Subestaciones />} />
            <Route path="/agegar_subestacion" element={<Add_Subestacion />} />
            {/* Linea base */}
            <Route path="/lineas_base" element={<Linea_Base />} />
            {/* Otros componentes */}
            <Route path="/cargando" element={<Loading></Loading>}></Route>
            <Route path="/perfil" element={<Profile></Profile>}></Route>
            <Route path="/configuracion" element={<Settings></Settings>}></Route>
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
