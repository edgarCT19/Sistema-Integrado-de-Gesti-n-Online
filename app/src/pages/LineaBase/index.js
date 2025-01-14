import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SsidChartIcon from '@mui/icons-material/SsidChart';
import LineChart from "../../components/Charts/chart_LB";

const Linea_Base = () => {
        const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
        const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
        const itemsPerPage = 14; // Número de elementos por página
    
        // Datos de ejemplo (esto debe venir de una API o base de datos)
        const data = [
            { id: '2016', dato1: '111.000', dato2: '111.000', dato3: '111.000', dato4: '111.000', dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
            { id: '2017', dato1: '111.000', dato2: '111.000',  dato3: '111.000', dato4: '111.000', dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
            { id: '2018', dato1: '111.000', dato2: '111.000',  dato3: '111.000', dato4: '111.000', dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
            { id: '2019', dato1: '111.000', dato2: '111.000', dato3: '111.000', dato4: '111.000', dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
            { id: '2020', dato1: '111.000', dato2: '111.000',  dato3: '111.000', dato4: '111.000',dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
            { id: '2021', dato1: '111.000', dato2: '111.000',  dato3: '111.000', dato4: '111.000', dato5: '111.000', dato6: '111.000', dato7: '111.000', dato8: '111.000', dato9: '111.000', dato10: '111.000', dato11: '111.000', dato12: '111.000', dato13: '111.000', dato14:'111.000'},
        ];
    
        // Filtrar los datos según el término de búsqueda
        const filteredData = data.filter((item) => {
            return (
                item.dato1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.dato2.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.id.toString().includes(searchTerm) 
            );
        });
    
        // Calcular los índices de los elementos que se deben mostrar
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    
    return(
        <div className="w-100 right-content">
            <div className="d-flex align-items-center justify-content-center">
              <h5 className="indicator-section-title">Líneas base</h5>
            </div>
            <div className="mt-2 align-items-center justify-content-center">
               <div className="mt-2">
                 <h6>Superficie año <strong>0000</strong>: <strong style={{color:"var(--color-uacam-datatext)"}}>89273.938</strong> </h6>
               </div>
               <div className="mt-2">
                 <h6>No. de personas año <strong>0000</strong>: <strong style={{color:"var(--color-uacam-datatext)"}}>89273.938</strong> </h6>
               </div>
               
            </div>
 
            <div className="card mt-2">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    {/* Content */}
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="15" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                        Consumo kWh</th>
                                </tr>
                                <tr className="text-center">
                                    <th>Mes / Año</th>
                                        <th>Enero</th>
                                        <th>Febrero</th>
                                        <th>Marzo</th>
                                        <th>Abril</th>
                                        <th>Mayo</th>
                                        <th>Junio</th>
                                        <th>Julio</th>
                                        <th>Agosto</th>
                                        <th>Septiembre</th>
                                        <th>Octubre</th>
                                        <th>Noviembre</th>
                                        <th>Diciembre</th>
                                        <th>Total</th>
                                        <th>Promedio mensual anual</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.dato1}</td>
                                            <td>{item.dato2}</td>
                                            <td>{item.dato3}</td>
                                            <td>{item.dato4}</td>
                                            <td>{item.dato5}</td>
                                            <td>{item.dato6}</td>
                                            <td>{item.dato7}</td>
                                            <td>{item.dato8}</td>
                                            <td>{item.dato9}</td>
                                            <td>{item.dato10}</td>
                                            <td>{item.dato11}</td>
                                            <td>{item.dato12}</td>
                                            <td>{item.dato13}</td>
                                            <td>{item.dato14}</td>
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
            </div>

            <div className="card mt-2">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <Link to="#">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<SsidChartIcon />}
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"
                        >
                            Ver gráfica
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="15" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                    Linea Base kWh / m<sup>2</sup></th>
                                </tr>
                                <tr className="text-center">
                                    <th>Mes / Año</th>
                                        <th>Enero</th>
                                        <th>Febrero</th>
                                        <th>Marzo</th>
                                        <th>Abril</th>
                                        <th>Mayo</th>
                                        <th>Junio</th>
                                        <th>Julio</th>
                                        <th>Agosto</th>
                                        <th>Septiembre</th>
                                        <th>Octubre</th>
                                        <th>Noviembre</th>
                                        <th>Diciembre</th>
                                        <th>Total</th>
                                        <th>Promedio mensual anual</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.dato1}</td>
                                            <td>{item.dato2}</td>
                                            <td>{item.dato3}</td>
                                            <td>{item.dato4}</td>
                                            <td>{item.dato5}</td>
                                            <td>{item.dato6}</td>
                                            <td>{item.dato7}</td>
                                            <td>{item.dato8}</td>
                                            <td>{item.dato9}</td>
                                            <td>{item.dato10}</td>
                                            <td>{item.dato11}</td>
                                            <td>{item.dato12}</td>
                                            <td>{item.dato13}</td>
                                            <td>{item.dato14}</td>
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
            </div>

            <div className="card mt-2">
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                    <Link to="#">
                        <Button
                            variant="contained"
                            className=" mx-2"
                            color="success"
                            endIcon={<SsidChartIcon />}
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal2"
                        >
                            Ver gráfica
                        </Button>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                    <th colSpan="15" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                    Linea Base kWh / persona </th>
                                </tr>
                                <tr className="text-center">
                                    <th>Mes / Año</th>
                                        <th>Enero</th>
                                        <th>Febrero</th>
                                        <th>Marzo</th>
                                        <th>Abril</th>
                                        <th>Mayo</th>
                                        <th>Junio</th>
                                        <th>Julio</th>
                                        <th>Agosto</th>
                                        <th>Septiembre</th>
                                        <th>Octubre</th>
                                        <th>Noviembre</th>
                                        <th>Diciembre</th>
                                        <th>Total</th>
                                        <th>Promedio mensual anual</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.dato1}</td>
                                            <td>{item.dato2}</td>
                                            <td>{item.dato3}</td>
                                            <td>{item.dato4}</td>
                                            <td>{item.dato5}</td>
                                            <td>{item.dato6}</td>
                                            <td>{item.dato7}</td>
                                            <td>{item.dato8}</td>
                                            <td>{item.dato9}</td>
                                            <td>{item.dato10}</td>
                                            <td>{item.dato11}</td>
                                            <td>{item.dato12}</td>
                                            <td>{item.dato13}</td>
                                            <td>{item.dato14}</td>
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
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Gráfica kWh / m2</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <LineChart></LineChart>
                </div>
                <div class="modal-footer">
                  {/*  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button> */} 
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel2">Gráfica  kWh / persona</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <LineChart></LineChart>
                </div>
                <div class="modal-footer">
                  {/*  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button> */} 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Linea_Base;