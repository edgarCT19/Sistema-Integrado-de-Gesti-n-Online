import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Paginacion from "../../../components/Pagination";
import Search from "../../../components/Search";
import SelectTuple from "../../SelectTuple";

const Bitacora_Inventario = () => {
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
    const itemsPerPage = 5; // Elementos por página

    // Datos de ejemplo (esto debe venir de una API o base de datos)
    const data = [
        { id: 66001, inicio: '12-08-2024 18:05:12', fin: '12-11-2024 18:05:12', status: 'En curso', observaciones: 'Información adicional que se requiera o importante', nuevos: 1000, editados: 500, eliminados: 100, autoriza: 'Victor Lanz Gutierrez de Velasco', rol: 'Administrador' },
        { id: 66002, inicio: '10-07-2024 10:00:00', fin: '11-09-2024 15:30:00', status: 'Finalizada', observaciones: 'Detalles adicionales sobre el cierre del período.', nuevos: 800, editados: 300, eliminados: 150, autoriza: 'María Pérez', rol: 'Supervisor' },
        { id: 66003, inicio: '01-05-2024 09:15:00', fin: '30-06-2024 17:45:00', status: 'Finalizada', observaciones: 'El inventario se completó sin contratiempos.', nuevos: 1200, editados: 450, eliminados: 200, autoriza: 'Juan López', rol: 'Administrador' },
        { id: 66004, inicio: '20-03-2024 08:30:00', fin: '25-05-2024 16:00:00', status: 'En curso', observaciones: 'Actualización parcial de registros.', nuevos: 950, editados: 600, eliminados: 75, autoriza: 'Ana García', rol: 'Supervisor' },
        { id: 66005, inicio: '15-01-2024 10:00:00', fin: '18-03-2024 14:30:00', status: 'Finalizada', observaciones: 'Se identificaron algunos errores menores.', nuevos: 700, editados: 350, eliminados: 125, autoriza: 'Carlos Ramírez', rol: 'Administrador' },
        { id: 66006, inicio: '05-11-2024 11:00:00', fin: '10-12-2024 19:00:00', status: 'En curso', observaciones: 'Se está procesando información adicional.', nuevos: 1100, editados: 550, eliminados: 80, autoriza: 'Laura Sánchez', rol: 'Supervisor' },
        { id: 66007, inicio: '02-02-2024 07:45:00', fin: '15-04-2024 18:15:00', status: 'Finalizada', observaciones: 'Revisión exhaustiva completada.', nuevos: 850, editados: 400, eliminados: 90, autoriza: 'Pedro Gutierrez', rol: 'Administrador' },
        { id: 66008, inicio: '12-06-2024 09:00:00', fin: '20-08-2024 17:30:00', status: 'En curso', observaciones: 'Pendiente de finalizar la auditoría.', nuevos: 1300, editados: 480, eliminados: 60, autoriza: 'Sofia Martínez', rol: 'Supervisor' }
    ];
    

    // Manejar búsqueda
    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
    };

    // Filtrar datos según el término de búsqueda
    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Calcular elementos visibles según la paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Manejar cambio de página
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="w-100 right-content">
            <div className="card">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <Search onSearch={handleSearch} />
                    <Link to="/nuevo_periodo_de_inventario">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<AddCircleOutlineIcon />}
                        >
                            Generar nuevo periodo
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="11" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                        Historial de periodos de inventarios
                                    </th>
                                </tr>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha / Hora de Inicio</th>
                                    <th>Fecha / Hora de Finalización</th>
                                    <th>Status</th>
                                    <th>Observaciones</th>
                                    <th>Total Nuevos</th>
                                    <th>Total Editados</th>
                                    <th>Total Eliminados</th>
                                    <th>Persona que Autoriza</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.inicio}</td>
                                            <td>{item.fin}</td>
                                            <td>{item.status}</td>
                                            <td>{item.observaciones}</td>
                                            <td>{item.nuevos}</td>
                                            <td>{item.editados}</td>
                                            <td>{item.eliminados}</td>
                                            <td>{item.autoriza}</td>
                                            <td>{item.rol}</td>
                                            <td>
                                                <div className="d-flex actions justify-content-around">
                                                    <Stack direction="row" spacing={1}>
                                                        <Tooltip title="Editar">
                                                            <IconButton size="small" color="primary">
                                                                <EditIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Eliminar">
                                                            <IconButton size="small" color="error">
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Ver inventario">
                                                            <IconButton size="small">
                                                                <VisibilityIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Stack>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="11">No se encontraron resultados.</td>
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

export default Bitacora_Inventario;
