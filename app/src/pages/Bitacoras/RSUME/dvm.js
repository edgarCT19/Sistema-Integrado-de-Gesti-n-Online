import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from "@mui/material/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";

const bitacora_rsume_vertedero = () => {

    return (
        <div className="w-100 right-content">
            <div className="card">
            <center><h5>DISPOSICION EN VERTEDERO MUNICIPAL</h5></center>
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Agregar nueva bitacora 
                </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                <th className="table-title text-center" >ID Bitacora</th>
                                <th className="table-title text-center" >Fecha <br></br> (DD/MM/AAAA)</th>
                                <th className="table-title text-center" >Desecho Organiza / Inorganica</th>
                                <th className="table-title text-center" >Total</th>
                                <th className="table-title text-center" >Acciones*3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>12/12/24</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
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
                                <tr>
                                    <th>2</th>
                                    <td>1/12/24</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
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
                                <tr>
                                    <th>3</th>
                                    <td>13/11/24</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
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
                            </tbody>
                        </table>                 
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar bitacora </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="DD/MM/AAAA HH:MM" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Dependencia o Area</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Tipo de desecho</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">

                                <span class="input-group-text" id="inputGroup-sizing-sm">Total</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div> 
                            <br></br>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-success">Guardar</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default bitacora_rsume_vertedero;