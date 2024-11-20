import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import Tooltip from "@mui/material/Tooltip";
import Paginacion from "../../components/Pagination";
import Search from "../../components/Search";
import SelectTuple from "../SelectTuple";

const Users_Inactivos = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const itemsPerPage = 5; // Número de elementos por página

  // Datos de ejemplo (deberían venir de una API o base de datos)
  const data = [
    { id: 66001, nombre: "Carlos Enrique", apellidos: "Pérez Dzib", correo: "al066001@uacam.mx", telefono: "9181102299", contraseña: "**********", unidad: "Facultad de Ingeniería", rol: "Capturista de Datos", estado: "Inactiva", fechaAlta: "12-08-2024 18:05:12", fechaBaja: "12-11-2024 18:05:12" },
    { id: 66002, nombre: "Maximo Felipe", apellidos: "Pérez Colli", correo: "em066002@uacam.mx", telefono: "9181102288", contraseña: "**********", unidad: "Facultad de Ingeniería", rol: "Responsable UR", estado: "Inactiva", fechaAlta: "12-08-2024 18:05:12", fechaBaja: "12-11-2024 18:05:12" },
    { id: 66003, nombre: "Ana María", apellidos: "Gómez López", correo: "ag066003@uacam.mx", telefono: "9181102277", contraseña: "**********", unidad: "Facultad de Ciencias Sociales", rol: "Docente", estado: "Inactiva", fechaAlta: "10-07-2024 10:30:45", fechaBaja: "10-11-2024 15:40:20" },
    { id: 66004, nombre: "Luis Fernando", apellidos: "Martínez Ruiz", correo: "lm066004@uacam.mx", telefono: "9181102266", contraseña: "**********", unidad: "Facultad de Derecho", rol: "Estudiante", estado: "Inactiva", fechaAlta: "15-07-2024 11:15:00", fechaBaja: "15-11-2024 14:00:12" },
    { id: 66005, nombre: "Sofía Elena", apellidos: "Hernández Ávila", correo: "sh066005@uacam.mx", telefono: "9181102255", contraseña: "**********", unidad: "Facultad de Medicina", rol: "Administrador", estado: "Inactiva", fechaAlta: "20-06-2024 08:20:30", fechaBaja: "20-11-2024 09:35:40" },
    { id: 66006, nombre: "Jorge Alberto", apellidos: "Rodríguez Paredes", correo: "jr066006@uacam.mx", telefono: "9181102244", contraseña: "**********", unidad: "Facultad de Ingeniería", rol: "Capturista de Datos", estado: "Inactiva", fechaAlta: "25-06-2024 14:50:15", fechaBaja: "25-11-2024 16:20:45" },
    { id: 66007, nombre: "María Teresa", apellidos: "López Méndez", correo: "ml066007@uacam.mx", telefono: "9181102233", contraseña: "**********", unidad: "Facultad de Ciencias Naturales", rol: "Docente", estado: "Inactiva", fechaAlta: "05-07-2024 09:40:50", fechaBaja: "05-11-2024 12:10:30" },
  ];
  
  // Filtrar los datos según el término de búsqueda
  const filteredData = data.filter((item) => {
    return (
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.unidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().includes(searchTerm)
    );
  });

  // Calcular los datos de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Manejar el cambio de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Manejar búsqueda
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
    setCurrentPage(1); // Reiniciar a la primera página al buscar
  };

  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Search onSearch={handleSearch} className="search-bar" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
                <tr>
                  <th colSpan="12" className="table-title text-center">
                    Tabla de Usuarios del Sistema / Bajas
                  </th>
                </tr>
                <tr>
                  <th>Matrícula (ID)</th>
                  <th>Nombre(s)</th>
                  <th>Apellido(s)</th>
                  <th>Correo Institucional</th>
                  <th>No. Telefónico</th>
                  <th>Unidad Responsable</th>
                  <th>Rol</th>
                  <th>Estado de la Cuenta</th>
                  <th>Fecha / Hora de Alta</th>
                  <th>Fecha / Hora de Baja</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.apellidos}</td>
                      <td>{item.correo}</td>
                      <td>{item.telefono}</td>
                      <td>{item.unidad}</td>
                      <td>{item.rol}</td>
                      <td className="text-danger">{item.estado}</td>
                      <td>{item.fechaAlta}</td>
                      <td>{item.fechaBaja}</td>
                      <td>
                        <div className="d-flex actions justify-content-around">
                          <Stack direction="row" spacing={1}>
                            <Tooltip title="Reactivar cuenta" placement="top">
                              <IconButton aria-label="reactivate" size="small" color="primary">
                                <ToggleOffIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Eliminar" placement="top">
                              <IconButton aria-label="delete" size="small" color="error">
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12">No se encontraron resultados.</td>
                  </tr>
                )}
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

export default Users_Inactivos;
