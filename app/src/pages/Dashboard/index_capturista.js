import React from "react";
import  Button  from "@mui/material/Button";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Capturista = () => {
    return(
        <div className="right-content">
            <div className="text-center">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="card">
                        <div class="card-header">
                        <i class="bi bi-snow"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Inventario energético de Aires Acondicionados</h5>
                            <p class="card-text">Has clic para dirigirte al apartado de los registros de este inventario.</p>
                            <Link to="/Aires_Acondicionados">
                            <Button variant="contained">Ir al inventario</Button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                    <div className="card">
                        <div class="card-header">
                        <i class="bi bi-lightbulb-fill"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Inventario energético de Luminarias</h5>
                            <p class="card-text">Has clic para dirigirte al apartado de los registros de este inventario.</p>
                            <Link to="/Luminarias">
                            <Button variant="contained">Ir al inventario</Button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="w-100 d-none d-md-block"></div>
                    <div className="col-12 col-sm-6 mt-2">
                    <div className="card">
                        <div class="card-header">
                        <i class="bi bi-pc-display"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Inventario energético de Misceláneos</h5>
                            <p class="card-text">Has clic para dirigirte al apartado de los registros de este inventario.</p>
                            <Link to="/Miscelaneos">
                            <Button variant="contained">Ir al inventario</Button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">
                    <div className="card">
                        <div class="card-header">
                        <i class="bi bi-receipt"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Registro de Facturas</h5>
                            <p class="card-text">Has clic para desplegar las opciones de facturas y dirigirte a la que desas.</p>
                            <Button variant="contained" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Ver registros</Button>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                <div className="table-container">
                            <table className="styled-table text-center">
                            <thead>
                                <tr>
                                <th colSpan="3" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                    Tabla de Tarifas
                                </th>
                                </tr>
                                <tr>
                                <th className="table-title text-center">Facturas de tipo</th>
                                <th className="table-title text-center">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>PDBT</td>
                                <td>
                                    <Link to="/Tabla_PDBT">
                                    <Button variant="contained">Ir a los registros</Button>
                                    </Link>
                                </td>
                                </tr>
                                <tr className="active-row">
                                <td>GDBT</td>
                                <td>
                                <Link to="/Tabla_GDBT">
                                    <Button variant="contained">Ir a los registros</Button>
                                </Link>
                                </td>
                                </tr>
                                <tr>
                                <td>GDMTH</td>
                                <td>
                                <Link to="/Tabla_GDMTH">
                                    <Button variant="contained">Ir a los registros</Button>
                                </Link>
                                </td>
                                </tr>
                                <tr className="active-row">
                                <td>GDMTO</td>
                                <td>
                                <Link to="/Tabla_GDMTO">
                                    <Button variant="contained">Ir a los registros</Button>
                                </Link>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 text-center">
            <div class="card">
                <div class="card-header">
                <i class="bi bi-building-fill-check"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title">UR: Facultad de Humanidades</h5>
                    <p class="card-text">Has clic en el botón para visualizar tus estadistícas en durante el periodo de inventarios.</p>
                    <Button variant="contained">Ver estadistícas</Button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Capturista;