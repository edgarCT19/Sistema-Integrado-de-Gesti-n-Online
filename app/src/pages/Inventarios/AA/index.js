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

const Inventario_AA = () => {
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const itemsPerPage = 5; // Número de elementos por página

  // Datos de ejemplo (esto debe venir de una API o base de datos)
  const data = [
    {
      id: 1,
      edificio: "A",
      nivel: "PB",
      area: "Sala de espera",
      tipo: "Minisplit",
      marca: "Carrier",
      modelo: "YEAHA36GF5-ADF",
      capacidad: 36000,
      voltaje: 220,
      amperaje: 17.2,
      potenciaWatts: 3784,
      potenciaKw: 3.784,
      usoMensual: 130,
      consumoMensual: 491.92,
      fecha: "12-09-2024",
    },
    {
      id: 2,
      edificio: "A",
      nivel: "PB",
      area: "Sala de espera",
      tipo: "Minisplit",
      marca: "York",
      modelo: "YEAHA36GF5-ADF",
      capacidad: 36000,
      voltaje: 220,
      amperaje: 17.2,
      potenciaWatts: 3784,
      potenciaKw: 3.784,
      usoMensual: 130,
      consumoMensual: 491.92,
      fecha: "12-09-2024",
    },
    {
      id: 3,
      edificio: "B",
      nivel: "1",
      area: "Oficina",
      tipo: "Central",
      marca: "Samsung",
      modelo: "SAMCFH40A",
      capacidad: 40000,
      voltaje: 380,
      amperaje: 22.5,
      potenciaWatts: 4800,
      potenciaKw: 4.8,
      usoMensual: 200,
      consumoMensual: 960,
      fecha: "15-08-2024",
    },
    {
      id: 4,
      edificio: "C",
      nivel: "2",
      area: "Comedor",
      tipo: "Split",
      marca: "Midea",
      modelo: "MDS-12HR",
      capacidad: 12000,
      voltaje: 220,
      amperaje: 8.5,
      potenciaWatts: 1350,
      potenciaKw: 1.35,
      usoMensual: 150,
      consumoMensual: 202.5,
      fecha: "20-07-2024",
    },
    {
      id: 5,
      edificio: "D",
      nivel: "3",
      area: "Auditorio",
      tipo: "VRF",
      marca: "LG",
      modelo: "LV24",
      capacidad: 24000,
      voltaje: 380,
      amperaje: 16,
      potenciaWatts: 3000,
      potenciaKw: 3,
      usoMensual: 250,
      consumoMensual: 750,
      fecha: "10-06-2024",
    },
    {
      id: 6,
      edificio: "E",
      nivel: "PB",
      area: "Pasillo",
      tipo: "Minisplit",
      marca: "Panasonic",
      modelo: "CS-XC9SKJ",
      capacidad: 9000,
      voltaje: 220,
      amperaje: 7,
      potenciaWatts: 1050,
      potenciaKw: 1.05,
      usoMensual: 100,
      consumoMensual: 105,
      fecha: "05-09-2024",
    },
    {
      id: 7,
      edificio: "F",
      nivel: "1",
      area: "Lobby",
      tipo: "Central",
      marca: "Trane",
      modelo: "TRA-XL18i",
      capacidad: 18000,
      voltaje: 380,
      amperaje: 14.8,
      potenciaWatts: 2500,
      potenciaKw: 2.5,
      usoMensual: 300,
      consumoMensual: 750,
      fecha: "25-11-2024",
    },
    {
      id: 8,
      edificio: "G",
      nivel: "2",
      area: "Biblioteca",
      tipo: "Minisplit",
      marca: "Daikin",
      modelo: "FTXM50N",
      capacidad: 18000,
      voltaje: 220,
      amperaje: 10.5,
      potenciaWatts: 2500,
      potenciaKw: 2.5,
      usoMensual: 180,
      consumoMensual: 450,
      fecha: "01-09-2024",
    },
  ];

  // Función para manejar el cambio de búsqueda
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter((item) => {
    return (
      item.edificio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nivel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.capacidad.toString().includes(searchTerm) ||
      item.voltaje.toString().includes(searchTerm) ||
      item.amperaje.toString().includes(searchTerm) ||
      item.potenciaWatts.toString().includes(searchTerm) ||
      item.potenciaKw.toString().includes(searchTerm) ||
      item.usoMensual.toString().includes(searchTerm) ||
      item.consumoMensual.toString().includes(searchTerm) ||
      item.fecha.toLowerCase().includes(searchTerm.toLowerCase())
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
          <Link to="/agregar_AA">
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
                    Tabla de Aires Acondicionados
                  </th>
                </tr>
                <tr>
                  <th>Edificio</th>
                  <th>Nivel</th>
                  <th>Área</th>
                  <th>Tipo de A.A.</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Capacidad en BTU/HR</th>
                  <th>Voltaje</th>
                  <th>Amperaje</th>
                  <th>Potencia (en Watts)</th>
                  <th>Potencia en Kw</th>
                  <th>Uso al mes(horas)</th>
                  <th>Consumo al mes (KWh / mes)</th>
                  <th>Fecha de registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.edificio}</td>
                      <td>{item.nivel}</td>
                      <td>{item.area}</td>
                      <td>{item.tipo}</td>
                      <td>{item.marca}</td>
                      <td>{item.modelo}</td>
                      <td>{item.capacidad}</td>
                      <td>{item.voltaje}</td>
                      <td>{item.amperaje}</td>
                      <td>{item.potenciaWatts}</td>
                      <td>{item.potenciaKw}</td>
                      <td>{item.usoMensual}</td>
                      <td>{item.consumoMensual}</td>
                      <td>{item.fecha}</td>
                      <td>
                        <div className="d-flex actions justify-content-around">
                          <Stack direction="row" spacing={1}>
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
                <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                  <th>Total:</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>100.00</th>
                  <th>100.00</th>
                  <th>100.00</th>
                  <th></th>
                  <th></th>
                </tr>
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

export default Inventario_AA;
