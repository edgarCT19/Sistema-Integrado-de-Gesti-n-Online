import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SelectUR from "../../../components/SelectUR";

const M2_construccion = () => {
    const [data, setData] = useState([
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio A", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio B", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio C", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio D", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio E", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Edificio F", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Laboratorio", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Nevería", unidad: 1233.22 },
        { aspecto: "Ingeniería", tipo: "Facultad de Ingeniería", formula: "Sociedad de alumnos", unidad: 1233.22 },
    ]);

    const [data2, setData2] = useState([
        { edificio: "Edificio A", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Edificio B", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Edificio C", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Edificio D", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Edificio E", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Edificio F", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Laboratorio", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Nevería", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { edificio: "Sociedad de alumnos", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
    ]);

    const [data3, setData3] = useState([
        { area: 12345.6, edificio: "Edificio A", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Edificio B", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Edificio C", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Edificio D", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Edificio E", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Edificio F", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Laboratorio", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Nevería", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
        { area: 12345.6, edificio: "Sociedad de alumnos", kwhmisc: 123, kwhaa: 100, kwhlumi: 100, totales:123 },
    ]);

    return (
        <div className="right-content">
            <div className="indicator-section-title justify-content-center d-flex">
                M2 de Construcción
            </div>
            <div className="mt-2">
                <div className="card">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="table-container">
                            <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                                <SelectUR />
                                <Link to="#">
                                    <Button
                                        variant="contained"
                                        className=" mx-2"
                                        color="success"
                                        endIcon={<AddCircleOutlineIcon />}
                                    >
                                        Agregar
                                    </Button>
                                </Link>
                            </div>
                            <table className="styled-table text-center">
                                <thead>
                                    <tr>
                                        <th colSpan="10" className="table-title text-center" style={{ background: "var(--color-uacam-bitacora)" }}>
                                            INFRAESTRUCTURA FISICA AL 31 DE JULIO DE 2017
                                        </th>
                                    </tr>
                                    <tr className="text-center">
                                        <th>Campus o Unidad</th>
                                        <th>Dependencia educativa</th>
                                        <th>Edificio</th>
                                        <th>M2 de construcción</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.aspecto}</td>
                                            <td>{row.tipo}</td>
                                            <td>{row.formula}</td>
                                            <td>{row.unidad}</td>
                                            <td>
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
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tr style={{ background: "var(--color-uacam-primary)", color: "var(--color-uacam-white)" }}>
                                    <th></th>
                                    <th></th>
                                    <th>Subtotal:</th>
                                    <th>4929.28</th>
                                    <th></th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="table-container">
                            <table className="styled-table text-center">
                            <thead>
                                <tr className="text-center">
                                    <th>Edificio</th>
                                    <th>Kwh Misc</th>
                                    <th>Kwh AA</th>
                                    <th>Kwh Lumi</th>
                                    <th>Totales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data2.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.edificio}</td>
                                        <td>{row.kwhmisc}</td>
                                        <td>{row.kwhaa}</td>
                                        <td>{row.kwhlumi}</td>
                                        <td>{row.totales}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="table-container">
                                <table className="styled-table text-center">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="table-title text-center" style={{background:"var(--color-uacam-success)"}}>
                                                Tabla de totales
                                            </th>
                                        </tr>
                                        <tr className="text-center" style={{backgroundColor:"var(--color-uacam-success)"}}>
                                            <th>Kwh Misc</th>
                                            <th>Kwh AA</th>
                                            <th>Kwh Lumi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="table-container">
                            <table className="styled-table text-center">
                            <thead>
                                <tr className="text-center">
                                    <th>Edificio</th>
                                    <th>Kwh Misc</th>
                                    <th>Kwh AA</th>
                                    <th>Kwh Lumi</th>
                                    <th>Totales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data2.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.edificio}</td>
                                        <td>{row.kwhmisc}</td>
                                        <td>{row.kwhaa}</td>
                                        <td>{row.kwhlumi}</td>
                                        <td>{row.totales}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="table-container">
                                <table className="styled-table text-center">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="table-title text-center" style={{background:"var(--color-uacam-success)"}}>
                                                Tabla de totales
                                            </th>
                                        </tr>
                                        <tr className="text-center" style={{backgroundColor:"var(--color-uacam-success)"}}>
                                            <th>Kwh Misc</th>
                                            <th>Kwh AA</th>
                                            <th>Kwh Lumi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="table-container">
                            <table className="styled-table text-center">
                            <thead>
                                <tr className="text-center">
                                    <th>Edificio</th>
                                    <th>Kwh Misc</th>
                                    <th>Kwh AA</th>
                                    <th>Kwh Lumi</th>
                                    <th>Totales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data2.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.edificio}</td>
                                        <td>{row.kwhmisc}</td>
                                        <td>{row.kwhaa}</td>
                                        <td>{row.kwhlumi}</td>
                                        <td>{row.totales}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="table-container">
                                <table className="styled-table text-center">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="table-title text-center" style={{background:"var(--color-uacam-success)"}}>
                                                Tabla de totales
                                            </th>
                                        </tr>
                                        <tr className="text-center">
                                            <th>Kwh Misc</th>
                                            <th>Kwh AA</th>
                                            <th>Kwh Lumi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card mt-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="table-container">
                            <table className="styled-table text-center">
                            <thead>
                                <tr className="text-center">
                                    <th>Área por edificio</th>
                                    <th>Edificio</th>
                                    <th>Kwh Misc</th>
                                    <th>Kwh AA</th>
                                    <th>Kwh Lumi</th>
                                    <th>Totales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data3.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.area}</td>
                                        <td>{row.edificio}</td>
                                        <td>{row.kwhmisc}</td>
                                        <td>{row.kwhaa}</td>
                                        <td>{row.kwhlumi}</td>
                                        <td>{row.totales}</td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="table-container">
                                <table className="styled-table text-center">
                                    <thead>
                                        <tr>
                                            <th colSpan="10" className="table-title text-center" style={{background:"var(--color-uacam-success)"}}>
                                                Tabla de totales
                                            </th>
                                        </tr>
                                        <tr className="text-center">
                                            <th>Kwh Misc</th>
                                            <th>Kwh AA</th>
                                            <th>Kwh Lumi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                            <td>123.12</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default M2_construccion;
