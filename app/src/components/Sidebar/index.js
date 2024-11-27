import React, { useState } from "react";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import LogoFoot from "../Footer";

import { Link } from "react-router-dom";

import { FaAngleRight, FaChartLine, FaBox, FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdStackedLineChart, MdOutlineInventory, MdEnergySavingsLeaf, MdArrowRight  } from "react-icons/md";
import { TbReportAnalytics, TbReceiptDollar, TbPointFilled } from "react-icons/tb";
import { FaUserCheck, FaRecycle, FaClipboardList, FaHouseDamage, FaBuilding  } from "react-icons/fa";
import { SiAzureartifacts } from "react-icons/si";

const Sidebar = () => {

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);
  const [activeLink, setActiveLink] = useState("");

  const toggleSubmenu = (menu) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
      setActiveLink("");
    } else {
      setOpenSubmenu(menu);
      setActiveLink(menu);
    }
  };
  

  const toggleNestedSubmenu = (menu) => {
    setOpenNestedSubmenu(openNestedSubmenu === menu ? null : menu);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="sidebar">
      
      <div className="tittle_seccion">
        <h5>
          Gestión enrgética <MdEnergySavingsLeaf className="ml-2" />
        </h5>
      </div>

      <ul>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "inicio" ? "active" : ""}`} onClick={() => toggleSubmenu("inicio")}>
            <span className="icon"><MdOutlineInventory /></span>
            Inventarios
            <span className={`arrow ${openSubmenu === "inicio" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "inicio"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="/Aires_Acondicionados" className="w-100"><span className="icon"><MdArrowRight   /></span>Aires acondicionados</Link></li>
              <li><Link to="/Luminarias" className="w-100"><span className="icon"><MdArrowRight   /></span>Luminarias</Link></li>
              <li><Link to="/Miscelaneos" className="w-100"><span className="icon"><MdArrowRight   /></span>Misceláneos</Link></li>
              <li><Link to="/Bitacora_de_inventarios"><span className="icon"><MdArrowRight   /></span>Historial de inventarios</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "UR" ? "active" : ""}`} onClick={() => toggleSubmenu("UR")}>
            <span className="icon"><FaBuilding  /></span>
            Unidad Responsable
            <span className={`arrow ${openSubmenu === "UR" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "UR"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="/unidad_responsable" className="w-100"><span className="icon"><MdArrowRight   /></span>Unidad</Link></li>
              <li><Link to="/edificio" className="w-100"><span className="icon"><MdArrowRight   /></span>Edificio</Link></li>
              <li><Link to="/nivel" className="w-100"><span className="icon"><MdArrowRight   /></span>Nivel</Link></li>
              <li><Link to="/area" className="w-100"><span className="icon"><MdArrowRight   /></span>Área</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "usuarios" ? "active" : ""}`} onClick={() => toggleSubmenu("usuarios")}>
            <span className="icon"><FaUserCheck /></span>
            Usuarios
            <span className={`arrow ${openSubmenu === "usuarios" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "usuarios"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="/usuarios" className="w-100"><span className="icon"><MdArrowRight   /></span>Usuarios de Alta</Link></li>
              <li><Link to="/usuarios_baja" className="w-100"><span className="icon"><MdArrowRight   /></span>Usuarios de Baja</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "indicadores" ? "active" : ""}`} onClick={() => toggleSubmenu("indicadores")}>
            <span className="icon"><FaMagnifyingGlassChart /></span>
            Indicadores
            <span className={`arrow ${openSubmenu === "indicadores" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "indicadores"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="/Indicadores_inventarios" className="w-100"><span className="icon"><MdArrowRight   /></span>Inventarios</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Indicadores globales</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Concentrados</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Indicadores de concentrados</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Indicadores finales</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="tarifas"
           className={`w-100 ${activeLink === "tarifas" ? "active" : ""}`}
            onClick={() => handleLinkClick("tarifas")}
            >
            <span className="icon"><TbReceiptDollar /></span>
            Tarifas
            
          </Link>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "facturas" ? "active" : ""}`} onClick={() => toggleSubmenu("facturas")}>
            <span className="icon"><SiAzureartifacts /></span>
            Facturas
            <span className={`arrow ${openSubmenu === "facturas" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "facturas"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="/Tabla_GDMTO" className="w-100"><span className="icon"><MdArrowRight   /></span>GDMTO</Link></li>
              <li><Link to="/Tabla_GDMTH" className="w-100"><span className="icon"><MdArrowRight   /></span>GDMTH</Link></li>
              <li><Link to="/Tabla_GDBT" className="w-100"><span className="icon"><MdArrowRight   /></span>GDBT</Link></li>
              <li><Link to="/Tabla_PDBT" className="w-100"><span className="icon"><MdArrowRight   /></span>PDBT</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "reportes" ? "active" : ""}`} onClick={() => toggleSubmenu("reportes")}>
            <span className="icon"><TbReportAnalytics /></span>
            Reportes
            <span className={`arrow ${openSubmenu === "reportes" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "reportes"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Bitácoras</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Inventario de A.A.</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Inventario de Luminarias</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Inventario de Misceláneos</Link></li>
              <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte 4</Link></li>
              <li>
                <Link to="#" className="w-100" onClick={() => toggleNestedSubmenu("reporte5")}>
                <span className="icon"><MdArrowRight   /></span>
                  Reporte 5
                  <span className={`arrow ${openNestedSubmenu === "reporte5" ? "rotate" : ""}`}><FaAngleRight /></span>
                </Link>
                <Collapse in={openNestedSubmenu === "reporte5"} timeout="auto" unmountOnExit>
                  <ul className="submenu-submenu">
                    <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span> Submenú-Submenú</Link></li>
                    <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span> Submenú-Submenú</Link></li>
                    <li><Link to="#" className="w-100"><span className="icon"><MdArrowRight   /></span> Submenú-Submenú</Link></li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="/lineas_base" className={`w-100 ${activeLink === "lineas_base" ? "active" : ""}`} onClick={() => handleLinkClick("lineas_base")}>
            <span className="icon"><MdStackedLineChart /></span>
            Lineas base
          </Link>
        </li>

        <li>
          <Link to="/subestaciones" className={`w-100 ${activeLink === "subestaciones" ? "active" : ""}`} onClick={() => handleLinkClick("subestaciones")}>
            <span className="icon"><FaBox /></span>
            Subestaciones
          </Link>
        </li>

      </ul>

     <div className="tittle_seccion">
        <h5>
          Gestión ambiental <FaRecycle className="ml-2" />
        </h5>
     </div>

      <ul>

          <li>
            <Link to="#" className={`w-100 ${activeLink === "Bitacora RP" ? "active" : ""}`} onClick={() => toggleSubmenu("Bitacora RP")}>
              <span className="icon"><FaClipboardList /></span>
              Bitácora RP
              <span className={`arrow ${openSubmenu === "Bitacora RP" ? "rotate" : ""}`}><FaAngleRight /></span>
            </Link>
            <Collapse in={openSubmenu === "Bitacora RP"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Bitácora mensual-RP</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Bitácora de almacenamiento temporal-RP</Link></li>
            </ul>
            </Collapse>
          </li>

          <li>
            <Link to="#" className={`w-100 ${activeLink === "Bitacora RPBI" ? "active" : ""}`} onClick={() => toggleSubmenu("Bitacora RPBI")}>
              <span className="icon"><FaClipboardList /></span>
              Bitácora RPBI
              <span className={`arrow ${openSubmenu === "Bitacora RPBI" ? "rotate" : ""}`}><FaAngleRight /></span>
            </Link>
            <Collapse in={openSubmenu === "Bitacora RPBI"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Bitácora generacion - RPBI</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Bitácora recoleta - RPBI</Link></li>
            </ul>
            </Collapse>
          </li>

          <li>
            <Link to="#" className={`w-100 ${activeLink === "Bitacora RSU" ? "active" : ""}`} onClick={() => toggleSubmenu("Bitacora RSU")}>
              <span className="icon"><FaClipboardList /></span>
              Bitácora RSU/ME
              <span className={`arrow ${openSubmenu === "Bitacora RSU" ? "rotate" : ""}`}><FaAngleRight /></span>
            </Link>
            <Collapse in={openSubmenu === "Bitacora RSU"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Registrar centro de acopio - RME</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Disposición en vertedero municipal</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Centro de acopio residuos para reuso y/o reciclaje</Link></li>
            </ul>
            </Collapse>
          </li>

          <li>
            <Link to="#" className={`w-100 ${activeLink === "BitacoraReporte" ? "active" : ""}`} onClick={() => toggleSubmenu("BitacoraReporte")}>
              <span className="icon"><TbReportAnalytics /></span>
              Reportes
              <span className={`arrow ${openSubmenu === "BitacoraReporte" ? "rotate" : ""}`}><FaAngleRight /></span>
            </Link>
            <Collapse in={openSubmenu === "BitacoraReporte"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 1</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 2</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 3</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 4</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 5</Link></li>
              <li><Link to="" className="w-100"><span className="icon"><MdArrowRight   /></span>Reporte Bitácora 6</Link></li>
            </ul>
            </Collapse>
          </li>
          
      </ul>
      
      <LogoFoot></LogoFoot>
      
    </div>
  );
};

export default Sidebar;
