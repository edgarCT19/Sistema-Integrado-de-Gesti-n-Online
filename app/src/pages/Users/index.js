import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from "@mui/material/Tooltip";
import Paginacion from "../../components/Pagination";
import Search from "../../components/Search";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
    const itemsPerPage = 5; // Número de elementos por página

    // Datos de ejemplo (esto debería venir de una API o base de datos)
    const data = [
        { id: 66001, nombre: "Carlos Enrique", apellidos: "Pérez Dzib", correo: "al066001@uacam.mx", telefono: "9181102299", contraseña: "**********", unidad: "Facultad de Ingeniería", rol: "Capturista de Datos", estado: "Activa", fechaAlta: "12-08-2024 18:05:12", fechaBaja: "12-11-2024 18:05:12" },
        { id: 66002, nombre: "Maximo Felipe", apellidos: "Pérez Colli", correo: "em066002@uacam.mx", telefono: "9181102288", contraseña: "**********", unidad: "Facultad de Ingeniería", rol: "Responsable UR", estado: "Activa", fechaAlta: "12-08-2024 18:05:12", fechaBaja: "12-11-2024 18:05:12" },
        { id: 66003, nombre: "Ana María", apellidos: "López Rodríguez", correo: "al066003@uacam.mx", telefono: "9181102277", contraseña: "**********", unidad: "Facultad de Química", rol: "Administrador", estado: "Activa", fechaAlta: "10-09-2024 09:15:34", fechaBaja: null },
        { id: 66004, nombre: "Juan Pablo", apellidos: "Hernández Gómez", correo: "jp066004@uacam.mx", telefono: "9181102266", contraseña: "**********", unidad: "Facultad de Medicina", rol: "Capturista de Datos", estado: "Activa", fechaAlta: "15-07-2024 14:22:11", fechaBaja: null },
        { id: 66005, nombre: "Mónica Esther", apellidos: "Martínez Cruz", correo: "mc066005@uacam.mx", telefono: "9181102255", contraseña: "**********", unidad: "Facultad de Educación", rol: "Responsable UR", estado: "Activa", fechaAlta: "05-06-2024 08:45:20", fechaBaja: "20-09-2024 12:30:00" },
        { id: 66006, nombre: "Roberto Carlos", apellidos: "Díaz Méndez", correo: "rc066006@uacam.mx", telefono: "9181102244", contraseña: "**********", unidad: "Facultad de Derecho", rol: "Capturista de Datos", estado: "Activa", fechaAlta: "20-10-2024 16:50:00", fechaBaja: null },
        { id: 66007, nombre: "Gabriela Fernanda", apellidos: "Sánchez Pérez", correo: "gs066007@uacam.mx", telefono: "9181102233", contraseña: "**********", unidad: "Facultad de Arquitectura", rol: "Administrador", estado: "Activa", fechaAlta: "18-05-2024 10:15:10", fechaBaja: "01-09-2024 17:45:30" },
        { id: 66008, nombre: "Fernando Luis", apellidos: "Vargas Hernández", correo: "fv066008@uacam.mx", telefono: "9181102222", contraseña: "**********", unidad: "Facultad de Ciencias", rol: "Responsable UR", estado: "Activa", fechaAlta: "01-04-2024 11:30:45", fechaBaja: null }
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

    // Calcular los datos a mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Manejar el cambio de página
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Manejar el término de búsqueda
    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
        setCurrentPage(1); // Reiniciar a la primera página al buscar
    };

    return (
        <div className="w-100 right-content">
            <div className="card">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <Search onSearch={handleSearch} />
                    <Link to="/agregar_usuario">
                        <Button
                            variant="contained"
                            className="mx-2"
                            color="success"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Nuevo usuario
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="12" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                        Tabla de Usuarios del Sistema / Altas
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
                                            <td className="text-success">{item.estado}</td>
                                            <td>{item.fechaAlta}</td>
                                            <td>{item.fechaBaja}</td>
                                            <td>
                                                <div className="d-flex actions justify-content-around">
                                                    <Stack direction="row" spacing={1}>
                                                        <Tooltip title="Editar" placement="top">
                                                            <IconButton aria-label="edit" size="small" color="primary">
                                                                <EditIcon fontSize="small" />
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

export default Users;
