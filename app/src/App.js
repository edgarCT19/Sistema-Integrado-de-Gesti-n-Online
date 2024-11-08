import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Dasboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login/login"
import Inventario_AA from "./pages/Inventarios/AA";
import Inventario_Luminarias from "./pages/Inventarios/Luminarias";
import Inventario_Miscelaneos from "./pages/Inventarios/Miscelaneos";
import Add_AA from "./pages/Inventarios/AA/form_add";
import Add_Luminaria from "./pages/Inventarios/Luminarias/form_add";
import Add_Miscelaneo from "./pages/Inventarios/Miscelaneos/form_add";
import Users from "./pages/Users";
import Users_Inactivos from "./pages/Users/inactivos";
import Add_User from "./pages/Users/add_user";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className="main d-flex">
          <div className="sidebarWrapper">
            <Sidebar></Sidebar>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Dasboard />}></Route>
              <Route path="/Dashboard" element={<Dasboard />}></Route>
              <Route path="/Aires_Acondicionados" element={<Inventario_AA />}></Route>
              <Route path="/agregar_AA" element={<Add_AA />}></Route>
              <Route path="/Luminarias" element={<Inventario_Luminarias />}></Route>
              <Route path="/agregar_Luminaria" element={<Add_Luminaria />}></Route>
              <Route path="/Miscelaneos" element={<Inventario_Miscelaneos />}></Route>
              <Route path="/agregar_Miscelaneo" element={<Add_Miscelaneo />}></Route>
              <Route path="/usuarios" element={<Users />}></Route>
              <Route path="/usuarios_baja" element={<Users_Inactivos />}></Route>
              <Route path="/agregar_usuario" element={<Add_User />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;