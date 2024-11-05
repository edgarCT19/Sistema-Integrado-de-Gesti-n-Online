import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Dasboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;