import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Search from "../../../components/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import SelectUR from "../../../components/SelectUR";
import SelectTuple from "../../SelectTuple";
import Paginacion from "../../../components/Pagination";
import Tooltip from "@mui/material/Tooltip";

const TablaGDBT = () => {
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const itemsPerPage = 5; // Número de elementos por página

  // Datos de ejemplo (esto debe venir de una API o base de datos)
  const data = [
    {
      subestaciones: "Sub A",
      periodo: "Enero",
      dias: 31,
      consumo: 1200,
      demandaMaxima: 450,
      factorPotencia: 0.95,
      factorCarga: 0.85,
      importeDemanda: 1500,
      importeFP: 100,
      dap: 200,
      iva: 300,
      total: 2100,
    },
    {
      subestaciones: "Sub B",
      periodo: "Febrero",
      dias: 28,
      consumo: 980,
      demandaMaxima: 410,
      factorPotencia: 0.91,
      factorCarga: 0.82,
      importeDemanda: 1350,
      importeFP: 110,
      dap: 185,
      iva: 295,
      total: 1940,
    },
    {
      subestaciones: "Sub C",
      periodo: "Marzo",
      dias: 30,
      consumo: 1050,
      demandaMaxima: 430,
      factorPotencia: 0.93,
      factorCarga: 0.84,
      importeDemanda: 1420,
      importeFP: 95,
      dap: 190,
      iva: 310,
      total: 2015,
    },
    {
      subestaciones: "Sub D",
      periodo: "Abril",
      dias: 30,
      consumo: 990,
      demandaMaxima: 405,
      factorPotencia: 0.90,
      factorCarga: 0.80,
      importeDemanda: 1280,
      importeFP: 105,
      dap: 175,
      iva: 285,
      total: 1845,
    },
    {
      subestaciones: "Sub E",
      periodo: "Mayo",
      dias: 31,
      consumo: 1120,
      demandaMaxima: 460,
      factorPotencia: 0.96,
      factorCarga: 0.87,
      importeDemanda: 1550,
      importeFP: 120,
      dap: 210,
      iva: 320,
      total: 2200,
    },
    {
      subestaciones: "Sub F",
      periodo: "Junio",
      dias: 30,
      consumo: 1025,
      demandaMaxima: 420,
      factorPotencia: 0.92,
      factorCarga: 0.81,
      importeDemanda: 1380,
      importeFP: 115,
      dap: 195,
      iva: 305,
      total: 1995,
    },
    {
      subestaciones: "Sub G",
      periodo: "Julio",
      dias: 31,
      consumo: 1100,
      demandaMaxima: 440,
      factorPotencia: 0.94,
      factorCarga: 0.83,
      importeDemanda: 1480,
      importeFP: 125,
      dap: 220,
      iva: 330,
      total: 2155,
    },
    {
      subestaciones: "Sub H",
      periodo: "Agosto",
      dias: 31,
      consumo: 1070,
      demandaMaxima: 415,
      factorPotencia: 0.91,
      factorCarga: 0.79,
      importeDemanda: 1330,
      importeFP: 100,
      dap: 180,
      iva: 290,
      total: 1900,
    },
    {
      subestaciones: "Sub I",
      periodo: "Septiembre",
      dias: 30,
      consumo: 1150,
      demandaMaxima: 470,
      factorPotencia: 0.97,
      factorCarga: 0.88,
      importeDemanda: 1600,
      importeFP: 130,
      dap: 225,
      iva: 340,
      total: 2295,
    },
    {
      subestaciones: "Sub J",
      periodo: "Octubre",
      dias: 31,
      consumo: 1085,
      demandaMaxima: 430,
      factorPotencia: 0.93,
      factorCarga: 0.85,
      importeDemanda: 1440,
      importeFP: 110,
      dap: 200,
      iva: 310,
      total: 2060,
    },
  ];  

  // Función para manejar el cambio de búsqueda
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter((item) => {
    return (
      item.subestaciones.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.periodo.toString().includes(searchTerm.toLowerCase()) ||
      item.dias.toString().includes(searchTerm.toLowerCase()) ||
      item.consumo.toString().includes(searchTerm.toLowerCase()) ||
      item.demandaMaxima.toString().includes(searchTerm.toLowerCase()) ||
      item.factorPotencia.toString().includes(searchTerm.toLowerCase()) ||
      item.factorCarga.toString().includes(searchTerm) ||
      item.importeDemanda.toString().includes(searchTerm) ||
      item.importeFP.toString().includes(searchTerm) ||
      item.iva.toString().includes(searchTerm) ||
      item.dap.toString().includes(searchTerm) ||
      item.total.toString().includes(searchTerm) 
    );
  });

  // Calcular los índices de los elementos que se deben mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el cambio de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="w-100 right-content">
      <div className="card">
        {/* Barra superior con campo de búsqueda y botones */}
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <SelectUR />
          <Search onSearch={handleSearch} className="search-bar" />
          <Link to="#">
            <Button
              variant="contained"
              className=" mx-2"
              color="success"
              endIcon={<AddCircleOutlineIcon />}
            >
              Agregar
            </Button>
          </Link>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
                <tr>
                  <th colSpan="15" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                    Tabla de Facturas GDBT
                  </th>
                </tr>
                <tr>
                <th>Subestaciones</th>
                <th>Periodo</th>
                <th>Días del periodo</th>
                <th>Consumo</th>
                <th>Demanda Máxima</th>
                <th>Factor de Potencia</th>
                <th>Factor de Carga</th>
                <th>Importe Demanda Máxima</th>
                <th>Importe FP</th>
                <th>DAP</th>
                <th>IVA</th>
                <th>Total a pagar</th>
                <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.subestaciones}</td>
                      <td>{item.periodo}</td>
                      <td>{item.dias}</td>
                      <td>{item.consumo}</td>
                      <td>{item.demandaMaxima}</td>
                      <td>{item.factorPotencia}</td>
                      <td>{item.factorCarga}</td>
                      <td>{item.importeDemanda}</td>
                      <td>{item.importeFP}</td>
                      <td>{item.iva}</td>
                      <td>{item.dap}</td>
                      <td>{item.total}</td>
                      <td>
                        <div className="d-flex actions justify-content-around">
                          <Stack direction="row" spacing={1}>
                          <Link to="#">
                              <Tooltip title="Descargar archivo PDF" placement="top">
                                <IconButton
                                  aria-label="file"
                                  size="small"
                                  color="secondary"
                                >
                                  <FileDownloadIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                            <Link to="#">
                              <Tooltip title="Editar" placement="top">
                                <IconButton
                                  aria-label="edit"
                                  size="small"
                                  color="primary"
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                            <Link to="#">
                              <Tooltip title="Eliminar" placement="top">
                                <IconButton
                                  aria-label="delete"
                                  size="small"
                                  color="error"
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </Stack>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="15">No se encontraron resultados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Componente de Paginación */}
        <Paginacion
          totalItems={filteredData.length} // Usamos los datos filtrados para la paginación
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TablaGDBT;
