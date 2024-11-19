import React, { useState } from "react";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import LogoFoot from "../Footer";

import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";
import { MdStackedLineChart, MdOutlineInventory, MdEnergySavingsLeaf } from "react-icons/md";
import { TbReportAnalytics, TbReceiptDollar } from "react-icons/tb";
import { FaUserCheck, FaRecycle, FaClipboardList, FaHouseDamage } from "react-icons/fa";
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
              <li><Link to="/Aires_Acondicionados" className="w-100">Aires acondicionados</Link></li>
              <li><Link to="/Luminarias" className="w-100">Luminarias</Link></li>
              <li><Link to="/Miscelaneos" className="w-100">Misceláneos</Link></li>
              <li><Link to="/Bitacora_de_inventarios">Bitácora de inventarios</Link></li>
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
              <li><Link to="/usuarios" className="w-100">Usuarios de Alta</Link></li>
              <li><Link to="/usuarios_baja" className="w-100">Usuarios de Baja</Link></li>
            </ul>
          </Collapse>
        </li>

        <li>
          <Link to="#" className={`w-100 ${activeLink === "indicadores" ? "active" : ""}`} onClick={() => toggleSubmenu("indicadores")}>
            <span className="icon"><MdStackedLineChart /></span>
            Indicadores
            <span className={`arrow ${openSubmenu === "indicadores" ? "rotate" : ""}`}><FaAngleRight /></span>
          </Link>
          <Collapse in={openSubmenu === "indicadores"} timeout="auto" unmountOnExit>
            <ul className="submenu">
              <li><Link to="#" className="w-100">Indicador 1</Link></li>
              <li><Link to="#" className="w-100">Indicador 2</Link></li>
              <li><Link to="#" className="w-100">Indicador 3</Link></li>
              <li><Link to="#" className="w-100">Indicador 4</Link></li>
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
              <li><Link to="/factura_gdmto" className="w-100">GDMTO</Link></li>
              <li><Link to="/factura_gdmth" className="w-100">GDMTH</Link></li>
              <li><Link to="/factura_gdbt" className="w-100">GDBT</Link></li>
              <li><Link to="/factura_pdbt" className="w-100">PDBT</Link></li>
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
              <li><Link to="#" className="w-100">Reporte 1</Link></li>
              <li><Link to="#" className="w-100">Reporte 2</Link></li>
              <li><Link to="#" className="w-100">Reporte 3</Link></li>
              <li><Link to="#" className="w-100">Reporte 4</Link></li>
              <li>
                <Link to="#" className="w-100" onClick={() => toggleNestedSubmenu("reporte5")}>
                  Reporte 5
                  <span className={`arrow ${openNestedSubmenu === "reporte5" ? "rotate" : ""}`}><FaAngleRight /></span>
                </Link>
                <Collapse in={openNestedSubmenu === "reporte5"} timeout="auto" unmountOnExit>
                  <ul className="submenu-submenu">
                    <li><Link to="#" className="w-100"> Submenú-Submenú</Link></li>
                    <li><Link to="#" className="w-100"> Submenú-Submenú</Link></li>
                    <li><Link to="#" className="w-100"> Submenú-Submenú</Link></li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </Collapse>
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
              <li><Link to="" className="w-100">Bitácora mensual-RP</Link></li>
              <li><Link to="" className="w-100">Bitácora de almacenamiento temporal-RP</Link></li>
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
              <li><Link to="" className="w-100">Bitácora generacion - RPBI</Link></li>
              <li><Link to="" className="w-100">Bitácora recoleta - RPBI</Link></li>
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
              <li><Link to="" className="w-100">Registrar centro de acopio - RME</Link></li>
              <li><Link to="" className="w-100">Disposición en vertedero municipal</Link></li>
              <li><Link to="" className="w-100">Centro de acopio residuos para reuso y/o reciclaje</Link></li>
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
              <li><Link to="" className="w-100">Reporte Bitácora 1</Link></li>
              <li><Link to="" className="w-100">Reporte Bitácora 2</Link></li>
              <li><Link to="" className="w-100">Reporte Bitácora 3</Link></li>
              <li><Link to="" className="w-100">Reporte Bitácora 4</Link></li>
              <li><Link to="" className="w-100">Reporte Bitácora 5</Link></li>
              <li><Link to="" className="w-100">Reporte Bitácora 6</Link></li>
            </ul>
            </Collapse>
          </li>
          
      </ul>
      
      <LogoFoot></LogoFoot>
      
    </div>
  );
};

export default Sidebar;
