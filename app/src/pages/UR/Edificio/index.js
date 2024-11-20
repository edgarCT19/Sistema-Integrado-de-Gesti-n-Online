import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Paginacion from "../../../components/Pagination";
import Tooltip from "@mui/material/Tooltip";
import Search from "../../../components/Search";

const Edificio = () => {
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const itemsPerPage = 5; // Número de elementos por página

    // Datos de ejemplo (esto debe venir de una API o base de datos)
    const data = [
        { id: 66001, nombre: 'A', fecha: '12-11-2024 18:05:12', unidad: 'Facultad de Ingeniería' },
        { id: 66002, nombre: 'B', fecha: '13-11-2024 10:05:00',  unidad: 'Facultad de Derecho'},
        { id: 66003, nombre: 'C', fecha: '14-11-2024 12:15:45',  unidad: 'Facultad de Medicina'},
        { id: 66004, nombre: 'D', fecha: '15-11-2024 09:20:10', unidad: 'Facultad de Ciencias'},
        { id: 66005, nombre: 'E', fecha: '16-11-2024 11:30:25',  unidad: 'Facultad de Informática'},
        { id: 66006, nombre: 'F', fecha: '17-11-2024 14:40:40',  unidad: 'Facultad de Psicología'},
        { id: 66007, nombre: 'I + D +i ', fecha: '18-11-2024 13:10:30',  unidad: 'Facultad de Educación' },
        { id: 66008, nombre: 'Otros', fecha: '19-11-2024 16:55:50',  unidad: 'Facultad de Economía'},
    ];

    // Función para manejar el cambio de búsqued
    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
    };

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter((item) => {
        return (
            item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.unidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toString().includes(searchTerm) 
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
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <Search onSearch={handleSearch} /> {/* Pasamos la función de búsqueda al componente Search */}
                    <Link to="#">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Agregar nuevo edificio
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="7" className="table-title text-center">Edificios de Unidad Responsable</th>
                                </tr>
                                <tr className="text-center">
                                    <th>ID</th>
                                    <th>Nombre de Edificio</th>
                                    <th>Fecha / Hora de Registro</th>
                                    <th>Unidad Responsable</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.fecha}</td>
                                            <td>{item.unidad}</td>
                                            <td>
                                                <div className="d-flex actions justify-content-around">
                                                    <Stack direction="row" spacing={1}>
                                                        <Tooltip title="Editar registro" placement="top">
                                                            <Link to="#">
                                                                <IconButton aria-label="edit" size="small" color="primary">
                                                                    <EditIcon fontSize="small" />
                                                                </IconButton>
                                                            </Link>
                                                        </Tooltip>
                                                        <Tooltip  title="Eliminar registro" placement="top">
                                                            <Link to="#">
                                                                <IconButton aria-label="delete" size="small" color="error">
                                                                    <DeleteIcon fontSize="small" />
                                                                </IconButton>
                                                            </Link>
                                                        </Tooltip>
                                                    </Stack>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">No se encontraron resultados.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
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

export default Edificio;