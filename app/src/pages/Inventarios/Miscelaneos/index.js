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
import Paginacion from "../../../components/Pagination";
import SelectUR from "../../../components/SelectUR";

const Inventario_Miscelaneos = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const itemsPerPage = 5; // Elementos por página

  // Datos de ejemplo (esto puede venir de tu API o base de datos)
  const data = [
    {
      edificio: "A",
      nivel: "PB",
      area: "Secretarias",
      marca: "HP",
      miscelaneo: "PC",
      modelo: "prodesk 600 61ff",
      voltaje: 100,
      amperaje: 4,
      potenciaWatts: 90,
      potenciaKw: 0.09,
      usoMensual: 147,
      consumoMensual: 13.23,
      fechaRegistro: "12-09-2024",
    },
    {
      edificio: "B",
      nivel: "1",
      area: "Oficinas",
      marca: "Dell",
      miscelaneo: "Laptop",
      modelo: "XPS 15",
      voltaje: 120,
      amperaje: 3,
      potenciaWatts: 85,
      potenciaKw: 0.085,
      usoMensual: 130,
      consumoMensual: 11.05,
      fechaRegistro: "15-09-2024",
    },
    {
      edificio: "C",
      nivel: "2",
      area: "Laboratorios",
      marca: "Lenovo",
      miscelaneo: "PC",
      modelo: "ThinkCentre",
      voltaje: 110,
      amperaje: 5,
      potenciaWatts: 100,
      potenciaKw: 0.1,
      usoMensual: 160,
      consumoMensual: 16,
      fechaRegistro: "18-09-2024",
    },
    {
      edificio: "D",
      nivel: "3",
      area: "Sala de reuniones",
      marca: "Samsung",
      miscelaneo: "Pantalla",
      modelo: "Smart TV",
      voltaje: 220,
      amperaje: 2,
      potenciaWatts: 150,
      potenciaKw: 0.15,
      usoMensual: 100,
      consumoMensual: 10,
      fechaRegistro: "20-09-2024",
    },
    // Agregar más datos de ejemplo según sea necesario
  ];

  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter((item) => {
    return (
      item.edificio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nivel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.miscelaneo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.voltaje.toString().includes(searchTerm) ||
      item.amperaje.toString().includes(searchTerm) ||
      item.potenciaWatts.toString().includes(searchTerm) ||
      item.potenciaKw.toString().includes(searchTerm) ||
      item.usoMensual.toString().includes(searchTerm) ||
      item.consumoMensual.toString().includes(searchTerm) ||
      item.fechaRegistro.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calcular los índices de los elementos que deben mostrarse
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el cambio de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Función para manejar la búsqueda
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  return (
    <div className="w-100 right-content">
      <div className="card">
        {/* Barra superior con campo de búsqueda y botones */}
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <SelectUR />

          <Search className="search-bar" onSearch={handleSearch} />

          <Link to="/agregar_Miscelaneo">
            <Button
              variant="contained"
              className="mx-2"
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
                    Tabla de Misceláneos
                  </th>
                </tr>
                <tr>
                  <th>Edificio</th>
                  <th>Nivel</th>
                  <th>Área</th>
                  <th>Marca</th>
                  <th>Misceláneo</th>
                  <th>Modelo</th>
                  <th>Voltaje</th>
                  <th>Amperaje</th>
                  <th>Potencia (en Watts)</th>
                  <th>Potencia en Kw</th>
                  <th>Uso al mes (horas)</th>
                  <th>Consumo al mes (KWh / mes)</th>
                  <th>Fecha de registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.edificio}</td>
                      <td>{item.nivel}</td>
                      <td>{item.area}</td>
                      <td>{item.marca}</td>
                      <td>{item.miscelaneo}</td>
                      <td>{item.modelo}</td>
                      <td>{item.voltaje}</td>
                      <td>{item.amperaje}</td>
                      <td>{item.potenciaWatts}</td>
                      <td>{item.potenciaKw}</td>
                      <td>{item.usoMensual}</td>
                      <td>{item.consumoMensual}</td>
                      <td>{item.fechaRegistro}</td>
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

        <Paginacion
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Inventario_Miscelaneos;
