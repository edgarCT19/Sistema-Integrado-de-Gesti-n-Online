import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const GestionMeta = () => {
    // Datos iniciales de la tabla
    const [data, setData] = useState([
        { aspecto: "Consumo de energía eléctrica y potencia instalada de la dependencia/piso, relacionada con el área", 
            tipo: "Consumo", formula: "Índice de consumo energético", unidad: "kWh/mes - m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada de la dependencia/piso, relacionada con el área", 
            tipo: "Consumo", formula: "Índice de potencia instalada", unidad: "KW/m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de consumo energético por misceláneos", unidad: "kWh/mes - m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de consumo energético por iluminación", unidad: "kWh/mes - m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de consumo energético por aire acondicionado y refrigeración", unidad: "kWh/mes - m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de potencia instalada por misceláneos", unidad: "KW/m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de potencia instalada por iluminación", unidad: "KW/m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del equipo/sistema", 
            tipo: "Consumo", formula: "Índice de potencia instalada por aire acondicionado y refrigeración", unidad: "KW/m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del sistema, relacionada con el área y la ocupación", 
            tipo: "Consumo", formula: "Índice de consumo energético por área total", unidad: "KW/mes-m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del sistema, relacionada con el área y la ocupación", 
            tipo: "Consumo", formula: "Índice de Potencia Instalada  por área total", unidad: "KW/m²", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del sistema, relacionada con el área y la ocupación", 
            tipo: "Consumo", formula: "Índice de consumo energético por persona", unidad: "KW/mes-pax", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Consumo de energía eléctrica y potencia instalada del sistema, relacionada con el área y la ocupación", 
            tipo: "Consumo", formula: "Índice de potencia instalada  por persona", unidad: "KW/pax", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Mejorar el desempeño energético a través del uso eficiente de la energía", 
            tipo: "Factor de potencia", formula: "Factor de potencia", unidad: "Númerico", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Mejorar el desempeño energético a través del uso eficiente de la energía", 
            tipo: "Consumo  energía eléctrica", formula: "Consumo promedio mensual de energía eléctrica/superficie construida", unidad: "Númerico", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
        { aspecto: "Cumplimiento de requisitos legales", 
            tipo: "Legal", formula: "Número de requisitos legales cumplidos / número de requisitos legales Identificados*100", unidad: "%", fecha1: "00-00-0000", 
            fecha2: "00-00-0000", valor1: 11.4, valor2:12.3, meta: 12.23 },
    ]);

    return (
        <div className="right-content">
            <div className="indicator-section-title justify-content-center d-flex">
                Indicador Gestión Meta del 5%
            </div>
            <div className="mt-2">
                <div className="card">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="table-container">
                            <table className="styled-table text-center">
                                <thead>
                                    <tr>
                                        <th colSpan="10" className="table-title text-center" style={{ background: "var(--color-uacam-bitacora)" }}>
                                          INDICADORES DEL SISTEMA DE GESTIÓN DE ENERGIA ISO 50001:2011
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="table-title text-center">Aspecto a medir</th>
                                        <th className="table-title text-center">Tipo</th>
                                        <th className="table-title text-center">Formula</th>
                                        <th className="table-title text-center">Unidad</th>
                                        <th className="table-title text-center">Periodo de medición Inicio</th>
                                        <th className="table-title text-center">Periodo de medición Final</th>
                                        <th className="table-title text-center">Valor año</th>
                                        <th className="table-title text-center">Valor actual</th>
                                        <th className="table-title text-center">Meta</th>
                                        <th className="table-title text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={row.aspecto} className={index % 2 === 0 ? "" : ""}>
                                            <td>{row.aspecto}</td>
                                            <td>{row.tipo}</td>
                                            <td>{row.formula}</td>
                                            <td>{row.unidad}</td>
                                            <td>{row.fecha1}</td>
                                            <td>{row.fecha2}</td>
                                            <td>{row.valor1}</td>
                                            <td>{row.valor2}</td>
                                            <td>{row.meta}</td>
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
                                                    </Stack>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GestionMeta;
