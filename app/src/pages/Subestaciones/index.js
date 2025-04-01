import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Paginacion from "../../components/Pagination";
import Tooltip from "@mui/material/Tooltip";
import Search from "../../components/Search";

const Subestaciones = () => {
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const itemsPerPage = 5; // Número de elementos por página

    // Datos de ejemplo (esto debe venir de una API o base de datos)
    const data = [
        { id: 66001, noServicio: '12345', noMedidor: '56789', tarifa: '100', multiplicador: '1.5' },
        { id: 66002, noServicio: '12346', noMedidor: '56790', tarifa: '110', multiplicador: '1.6' },
        { id: 66003, noServicio: '12347', noMedidor: '56791', tarifa: '120', multiplicador: '1.7' },
        { id: 66004, noServicio: '12348', noMedidor: '56792', tarifa: '130', multiplicador: '1.8' },
        { id: 66005, noServicio: '12349', noMedidor: '56793', tarifa: '140', multiplicador: '1.9' },
        { id: 66006, noServicio: '12350', noMedidor: '56794', tarifa: '150', multiplicador: '2.0' },
        { id: 66007, noServicio: '12351', noMedidor: '56795', tarifa: '160', multiplicador: '2.1' },
        { id: 66008, noServicio: '12352', noMedidor: '56796', tarifa: '170', multiplicador: '2.2' },
    ];

    // Función para manejar el cambio de búsqued
    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
    };

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter((item) => {
        return (
            item.noServicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.noMedidor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.multiplicador.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                    <Link to="/agegar_subestacion">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Agregar nueva subestación
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="7" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>Subestaciones</th>
                                </tr>
                                <tr className="text-center">
                                    <th>ID</th>
                                    <th>No. de Servicio</th>
                                    <th>No. de Medidor</th>
                                    <th>Tarifa</th>
                                    <th>Multiplicador</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.noServicio}</td>
                                            <td>{item.noMedidor}</td>
                                            <td>{item.tarifa}</td>
                                            <td>{item.multiplicador}</td>
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

export default Subestaciones;