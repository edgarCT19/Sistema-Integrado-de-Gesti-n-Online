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

const bitacora_mensual_temporal = () => {

    return (
        <div className="w-100 right-content">
            <div className="card">
            <center><h5>BITACORA PARA REGISTRAR EN EL CENTRO DE ALMACENAMIENTO TEMPORAL LOS RESIDUOS PELIGROSOS</h5></center>
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
                                <th className="table-title text-center" >Residuo</th>
                                <th className="table-title text-center" >Estado Fisico</th>
                                <th className="table-title text-center" >Cantidad*1</th>
                                <th className="table-title text-center" >CRETI*2</th>
                                <th className="table-title text-center" >Tipo de envase*3</th>
                                <th className="table-title text-center" >Acciones*3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>12/12/24</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
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
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
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
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
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
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Centro de acopio:</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <br></br>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Campus:</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <br></br>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" placeholder="DD/MM/AAAA HH:MM" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Residuo</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Estado Fisico</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                
                                <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div> 
                            <label for="exampleFormControlInput1" class="form-label">CRETI</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Ninguno Seleccionado</option>
                                <option value="1">Corrosivo</option>
                                <option value="2">Reactivo</option>
                                <option value="3">Explosivo</option>
                                <option value="3">Toxico</option>
                                <option value="3">Inflamable</option>
                            </select>
                            <br></br>
                            <label for="exampleFormControlInput1" class="form-label">Tipo de envase</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Ninguno seleccionado</option>
                                <option value="1">Vidrio</option>
                                <option value="2">Plastico</option>
                            </select>
                            <br></br>
                            <div class="input-group input-group-sm mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Capacidad y medida</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>

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
export default bitacora_mensual_temporal;

