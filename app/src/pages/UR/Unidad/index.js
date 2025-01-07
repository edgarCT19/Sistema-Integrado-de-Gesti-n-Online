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
import { UndoOutlined } from "@mui/icons-material";

const Unidad = () => {
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const itemsPerPage = 5; // Número de elementos por página

    // Datos de ejemplo (esto debe venir de una API o base de datos)
    const data = [
        { id: 66001,nombreUR: 'Facultad de Ingeniería', fecha: '12-11-2024 18:05:12', encargadoUR: 'Pedro Rosas' },
        { id: 66002,nombreUR: 'Facultad de QFB', fecha: '13-11-2024 10:05:00',  encargadoUR: 'Ruben Paredes'},
        { id: 66003,nombreUR: 'Facultad de Contaduría', fecha: '14-11-2024 12:15:45',  encargadoUR: 'Rosario Cortés'},
        { id: 66004,nombreUR: 'Centro de Estudios de Lenguas Extranjeras', fecha: '15-11-2024 09:20:10', encargadoUR: 'Manuel Estrada'},
        { id: 66005,nombreUR: 'Facultad de Enfermería', fecha: '16-11-2024 11:30:25',  encargadoUR: 'Jorge Hernández'},
        { id: 66006,nombreUR: 'SPAUAC', fecha: '17-11-2024 14:40:40',  encargadoUR: 'Oswaldo Dzec'},
        { id: 66007,nombreUR: 'Coordinación General de Sustentabilidad YumKaax ', fecha: '18-11-2024 13:10:30',  encargadoUR: 'Carlos Uc' },
        { id: 66008,nombreUR: 'Facultad de Medicina', fecha: '19-11-2024 16:55:50',  encargadoUR: 'Edgar Cosgaya'},
    ];

    // Función para manejar el cambio de búsqued
    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
    };

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter((item) => {
        return (
            item.nombreUR.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.encargadoUR.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                    <Link to="/unidad">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Agregar nueva UR
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="7" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>Unidades Responsables</th>
                                </tr>
                                <tr className="text-center">
                                    <th>ID</th>
                                    <th>Nombre de UR</th>
                                    <th>Fecha / Hora de Registro</th>
                                    <th>Responsable</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombreUR}</td>
                                            <td>{item.fecha}</td>
                                            <td>{item.encargadoUR}</td>
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

export default Unidad;