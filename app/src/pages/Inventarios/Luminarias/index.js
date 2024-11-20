import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Search from "../../../components/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import SelectUR from "../../../components/SelectUR";
import Paginacion from "../../../components/Pagination";

const Inventario_Luminarias = () => {
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
      tipo: "Fluorescente",
      numLuminarias: 2,
      lamparasPorLuminaria: 2,
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
      tipo: "Fluorescente",
      numLuminarias: 2,
      lamparasPorLuminaria: 2,
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
      tipo: "LED",
      numLuminarias: 5,
      lamparasPorLuminaria: 3,
      potenciaWatts: 5000,
      potenciaKw: 5,
      usoMensual: 200,
      consumoMensual: 1000,
      fecha: "15-08-2024",
    },
    {
      id: 4,
      edificio: "C",
      nivel: "2",
      area: "Comedor",
      tipo: "Halógena",
      numLuminarias: 4,
      lamparasPorLuminaria: 2,
      potenciaWatts: 2500,
      potenciaKw: 2.5,
      usoMensual: 150,
      consumoMensual: 375,
      fecha: "20-07-2024",
    },
    {
      id: 5,
      edificio: "D",
      nivel: "3",
      area: "Auditorio",
      tipo: "LED",
      numLuminarias: 10,
      lamparasPorLuminaria: 4,
      potenciaWatts: 10000,
      potenciaKw: 10,
      usoMensual: 300,
      consumoMensual: 3000,
      fecha: "10-06-2024",
    },
    {
      id: 6,
      edificio: "E",
      nivel: "PB",
      area: "Pasillo",
      tipo: "Incandescente",
      numLuminarias: 6,
      lamparasPorLuminaria: 2,
      potenciaWatts: 1200,
      potenciaKw: 1.2,
      usoMensual: 100,
      consumoMensual: 120,
      fecha: "05-09-2024",
    },
    {
      id: 7,
      edificio: "F",
      nivel: "1",
      area: "Lobby",
      tipo: "Fluorescente",
      numLuminarias: 8,
      lamparasPorLuminaria: 2,
      potenciaWatts: 3500,
      potenciaKw: 3.5,
      usoMensual: 250,
      consumoMensual: 875,
      fecha: "25-11-2024",
    },
    {
      id: 8,
      edificio: "G",
      nivel: "2",
      area: "Biblioteca",
      tipo: "LED",
      numLuminarias: 3,
      lamparasPorLuminaria: 1,
      potenciaWatts: 1200,
      potenciaKw: 1.2,
      usoMensual: 180,
      consumoMensual: 216,
      fecha: "01-09-2024",
    },
  ];

  // Función para manejar el cambio de búsqueda
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter((item) => {
    const searchLowerCase = searchTerm.toLowerCase();
    return (
      item.edificio.toLowerCase().includes(searchLowerCase) ||
      item.nivel.toLowerCase().includes(searchLowerCase) ||
      item.area.toLowerCase().includes(searchLowerCase) ||
      item.tipo.toLowerCase().includes(searchLowerCase) ||
      item.numLuminarias.toString().includes(searchTerm) ||
      item.lamparasPorLuminaria.toString().includes(searchTerm) ||
      item.potenciaWatts.toString().includes(searchTerm) ||
      item.potenciaKw.toString().includes(searchTerm) ||
      item.usoMensual.toString().includes(searchTerm) ||
      item.consumoMensual.toString().includes(searchTerm) ||
      item.fecha.toLowerCase().includes(searchLowerCase)
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
          <Link to="/agregar_Luminaria">
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
                  <th colSpan="14" className="table-title text-center">
                    Tabla de Luminarias
                  </th>
                </tr>
                <tr>
                  <th>Edificio</th>
                  <th>Nivel</th>
                  <th>Área</th>
                  <th>Tipo de Lámpara</th>
                  <th>No. de Luminarias</th>
                  <th>Lámparas por Luminaria</th>
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
                      <td>{item.tipo}</td> {/* Cambié tipoLámpara por tipo */}
                      <td>{item.numLuminarias}</td>
                      <td>{item.lamparasPorLuminaria}</td>{" "}
                      {/* Cambié lámparasPorLuminaria */}
                      <td>{item.potenciaWatts}</td>
                      <td>{item.potenciaKw}</td>
                      <td>{item.usoMensual}</td>
                      <td>{item.consumoMensual}</td>
                      <td>{item.fecha}</td>{" "}
                      {/* Cambié fechaRegistro por fecha */}
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
                    <td colSpan="14">No se encontraron resultados.</td>
                  </tr>
                )}
                <tr
                  style={{
                    background: "var(--color-uacam-primary)",
                    color: "var(--color-uacam-white)",
                  }}
                >
                  <th>Total:</th>
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

export default Inventario_Luminarias;
