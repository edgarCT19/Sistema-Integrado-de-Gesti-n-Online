import React from "react";
import SelectUR from "../../../components/SelectUR";
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Link } from "react-router-dom";

const BitacoraUE = () => {
    return(
        <div className="right-content">
            <div className="text-center">
                <h5>Bitácora de uso eficiente de la energía</h5>
            </div>
            <div className="text-center">
                <h5>Unidad Responsable: <strong style={{color: "var(--color-uacam-datatext)"}}>Facultad de Ingeniería</strong></h5>
            </div>
            <div className="text-center">
                 <h6>Referencia normativa: <strong>ISO 50001:2011: 4.4.3, 4.5.5 - ISO14001:2015: 6.1.2, 6.1.4, 8.1</strong></h6>
            </div>
            <div className="mt-3">
              <div className="card contentWrraperSelect">
                <div class="row text-center" style={{gap:"25px"}}>
                    <div class="col-sm-6 col-md"><SelectUR></SelectUR></div>
                    <div class="col-6 col-md-4">
                        <Link to="/analisis_de_consumo">
                            <Button className="" variant="contained" endIcon={<EqualizerIcon />}>
                            Ver análisis de consumo
                            </Button>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
                <div className="card">
                    <div class="container text-center">
                        <div class="row g-1">
                            <div class="col-6">
                            <div class="p-2">
                                <h6>Edificio de mayor consumo: <strong style={{color:"var(--color-uacam-datatext)"}}>B</strong></h6>
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="p-2">
                                <h6>Carga de mayor consumo: <strong style={{color:"var(--color-uacam-datatext)"}}>Aire Acondicionado</strong></h6>
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="p-2">
                                <h6><strong style={{color:"var(--color-uacam-datatext)"}}>768.798KWh</strong></h6>
                            </div>
                            </div>
                            <div class="col-6">
                            <div class="p-2">
                                <h6><strong style={{color:"var(--color-uacam-datatext)"}}>768.79KWh</strong></h6>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>A</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>A</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>A</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>B</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>B</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>B</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>C</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>C</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>C</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>D</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>D</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>D</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>E</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>E</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>E</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>F</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>F</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>F</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Area Exterior</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Area Exterior</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Area Exterior</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Laboratorio pesado</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Laboratorio pesado</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Laboratorio pesado</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
                                Áreas y equipos de uso significativo
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Neveria</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Neveria</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Neveria</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-danger)"}}>
                                Consumo total por tipo de carga
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Ubicación</th>
                            <th className="table-title text-center">Tipo de carga</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Campus V</td>
                            <td>Iluminación</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>Aires acondicionados</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Campus V</td>
                            <td>Misceláneos</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
            <div className="mt-3">
               <div className="card">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                        <thead>
                            <tr>
                            <th colSpan="6" className="table-title text-center" style={{background:"var(--color-uacam-danger)"}}>
                                Consumo total por edificio
                            </th>
                            </tr>
                            <tr>
                            <th className="table-title text-center">Ubicación</th>
                            <th className="table-title text-center">Edificio</th>
                            <th className="table-title text-center">KWh Totales (consumo)</th>
                            <th className="table-title text-center">Totales de horas en uso</th>
                            <th className="table-title text-center">KWh Totales (consumo) en %</th>
                            <th className="table-title text-center">Totales de horas en uso en %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Campus V</td>
                            <td>A</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>B</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Campus V</td>
                            <td>C</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>D</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Campus V</td>
                            <td>D</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>E</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Campus V</td>
                            <td>F</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>Area Exterior</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr>
                            <td>Campus V</td>
                            <td>Laboratorio Pesado</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                            <tr className="active-row">
                            <td>Campus V</td>
                            <td>Neveria</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                            </tr>
                        </tbody>
                        <tr style={{background: "var(--color-uacam-primary)", color:"var(--color-uacam-white)"}}>
                            <td></td>
                            <td>Totales</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100%</td>
                            <td>100%</td>
                        </tr>
                        </table>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default BitacoraUE;