import React from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip from "@mui/material/Tooltip";
import Paginacion from "../../components/Pagination";
import Search from "../../components/Search";
import SelectTuple from "../SelectTuple";

import HowToRegIcon from '@mui/icons-material/HowToReg';

const Users = () => {
    return(
        <>
         <div className="w-100 right-content">
            <div className="card">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <SelectTuple></SelectTuple>
                    <Search className="search-bar"></Search>
                    <Link to="/agregar_usuario">
                        <Button
                        variant="contained"
                        className=" mx-2"
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
                                    <th colSpan="14" className="table-title text-center">Tabla de Usuarios del Sistema / Altas</th>
                                </tr>
                                <tr>
                                <th>Matrícula (ID)</th>
                                <th>Nombre(s)</th>
                                <th>Apellido(s)</th>
                                <th>Correo Institucional</th>
                                <th>No. Telefônico</th>
                                <th>Contraseña</th>
                                <th>Unidad Responsable</th>
                                <th>Rol</th>
                                <th>Estado de la Cuenta</th>
                                <th>Fecha / Hora de Alta</th>
                                <th>Fecha / Hora de Baja</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>66001</td>
                                    <td>Carlos Enrique</td>
                                    <td>Pérez Dzib</td>
                                    <td>al066001@uacam.mx</td>
                                    <td>9181102299</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Capturista de Datos</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                        <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <Tooltip  title="Editar" placement="top">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    </Tooltip>
                                                </Link>
                                                <Link to="#">
                                                    <Tooltip title="Eliminar" placement="top">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                    </Tooltip>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="active-row">
                                    <td>66002</td>
                                    <td>Maximo Felipe</td>
                                    <td>Pérez Colli</td>
                                    <td>em066002@uacam.mx</td>
                                    <td>9181102288</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Responsable UR</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                            <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                                <Link to="#">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>66002</td>
                                    <td>Maximo Felipe</td>
                                    <td>Pérez Colli</td>
                                    <td>em066002@uacam.mx</td>
                                    <td>9181102288</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Responsable UR</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                            <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                                <Link to="#">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="active-row">
                                    <td>66002</td>
                                    <td>Maximo Felipe</td>
                                    <td>Pérez Colli</td>
                                    <td>em066002@uacam.mx</td>
                                    <td>9181102288</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Responsable UR</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                            <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                                <Link to="#">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>66002</td>
                                    <td>Maximo Felipe</td>
                                    <td>Pérez Colli</td>
                                    <td>em066002@uacam.mx</td>
                                    <td>9181102288</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Responsable UR</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                            <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                                <Link to="#">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="active-row">
                                    <td>66002</td>
                                    <td>Maximo Felipe</td>
                                    <td>Pérez Colli</td>
                                    <td>em066002@uacam.mx</td>
                                    <td>9181102288</td>
                                    <td>**********</td>
                                    <td>Facultad de Ingeniería</td>
                                    <td>Responsable UR</td>
                                    <td>Activa</td>
                                    <td>12-08-2024 18:05:12</td>
                                    <td>12-11-2024 18:05:12</td>
                                    <td>
                                        <div className="d-flex actions justify-content-around">
                                            <Stack direction="row" spacing={1}>
                                                <Link to="#">
                                                    <IconButton aria-label="edit" size="small" color="primary">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                                <Link to="#">
                                                    <IconButton aria-label="delete" size="small" color="error">
                                                        <DeleteIcon fontSize="small"/>
                                                    </IconButton>
                                                </Link>
                                            </Stack>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Paginacion></Paginacion>
            </div>
         </div>
        </>
    );
}

export default Users;