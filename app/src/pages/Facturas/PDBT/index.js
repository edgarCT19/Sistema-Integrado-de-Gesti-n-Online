import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Tooltip, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TablaPDBT = () => {
  const [facturas, setFacturas] = useState([
    {
      mes: "Enero",
      archivo: "Archivo 1",
      historial: "Historial 1",
      subestaciones: "Sub A",
      dias: 30,
      consumo: 1000,
      cargoEnergia: 1500,
      demandaMaxima: 500,
      dap: 100,
      iva: 290,
      total: 2390,
    },
    {
      mes: "Febrero",
      archivo: "Archivo 2",
      historial: "Historial 2",
      subestaciones: "Sub B",
      dias: 28,
      consumo: 800,
      cargoEnergia: 1200,
      demandaMaxima: 400,
      dap: 80,
      iva: 216,
      total: 1896,
    },
    {
      mes: "Marzo",
      archivo: "Archivo 3",
      historial: "Historial 3",
      subestaciones: "Sub C",
      dias: 31,
      consumo: 950,
      cargoEnergia: 1400,
      demandaMaxima: 450,
      dap: 90,
      iva: 277,
      total: 2217,
    },
    {
      mes: "Abril",
      archivo: "Archivo 4",
      historial: "Historial 4",
      subestaciones: "Sub D",
      dias: 30,
      consumo: 880,
      cargoEnergia: 1350,
      demandaMaxima: 430,
      dap: 85,
      iva: 265,
      total: 2130,
    },
    {
      mes: "Mayo",
      archivo: "Archivo 5",
      historial: "Historial 5",
      subestaciones: "Sub E",
      dias: 31,
      consumo: 1020,
      cargoEnergia: 1550,
      demandaMaxima: 520,
      dap: 105,
      iva: 314,
      total: 2489,
    },
    {
      mes: "Junio",
      archivo: "Archivo 6",
      historial: "Historial 6",
      subestaciones: "Sub F",
      dias: 30,
      consumo: 1100,
      cargoEnergia: 1650,
      demandaMaxima: 550,
      dap: 110,
      iva: 330,
      total: 2640,
    },
    {
      mes: "Julio",
      archivo: "Archivo 7",
      historial: "Historial 7",
      subestaciones: "Sub G",
      dias: 31,
      consumo: 1050,
      cargoEnergia: 1600,
      demandaMaxima: 540,
      dap: 108,
      iva: 324,
      total: 2572,
    },
    {
      mes: "Agosto",
      archivo: "Archivo 8",
      historial: "Historial 8",
      subestaciones: "Sub H",
      dias: 31,
      consumo: 970,
      cargoEnergia: 1500,
      demandaMaxima: 500,
      dap: 100,
      iva: 300,
      total: 2400,
    },
    {
      mes: "Septiembre",
      archivo: "Archivo 9",
      historial: "Historial 9",
      subestaciones: "Sub I",
      dias: 30,
      consumo: 920,
      cargoEnergia: 1450,
      demandaMaxima: 480,
      dap: 96,
      iva: 290,
      total: 2316,
    },
    {
      mes: "Octubre",
      archivo: "Archivo 10",
      historial: "Historial 10",
      subestaciones: "Sub J",
      dias: 31,
      consumo: 1080,
      cargoEnergia: 1620,
      demandaMaxima: 540,
      dap: 108,
      iva: 324,
      total: 2592,
    },
    {
      mes: "Noviembre",
      archivo: "Archivo 11",
      historial: "Historial 11",
      subestaciones: "Sub K",
      dias: 30,
      consumo: 1000,
      cargoEnergia: 1500,
      demandaMaxima: 500,
      dap: 100,
      iva: 300,
      total: 2400,
    },
    {
      mes: "Diciembre",
      archivo: "Archivo 12",
      historial: "Historial 12",
      subestaciones: "Sub L",
      dias: 31,
      consumo: 1150,
      cargoEnergia: 1700,
      demandaMaxima: 600,
      dap: 120,
      iva: 342,
      total: 2762,
    },
  ]);

  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Button
            variant="contained"
            color="success"
            endIcon={<AddCircleOutlineIcon />}
          >
            Agregar
          </Button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
              <tr>
                  <th colSpan="16" className="table-title text-center">
                    Historial PDBT
                  </th>
                </tr>
                <tr>
                  <th>Periodo</th>
                  <th>Archivo</th>
                  <th>Historial PDBT</th>
                  <th>Subestaciones</th>
                  <th>Días del periodo</th>
                  <th>Consumo</th>
                  <th>Cargo por Energía</th>
                  <th>Importe por Demanda Máxima</th>
                  <th>DAP</th>
                  <th>IVA</th>
                  <th>Total a pagar</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((factura, index) => (
                  <tr key={index}>
                    <td>{factura.mes}</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-large"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                    </td>
                    <td>{factura.historial}</td>
                    <td>{factura.subestaciones}</td>
                    <td>{factura.dias}</td>
                    <td>{factura.consumo}</td>
                    <td>{factura.cargoEnergia}</td>
                    <td>{factura.demandaMaxima}</td>
                    <td>{factura.dap}</td>
                    <td>{factura.iva}</td>
                    <td>{factura.total}</td>
                    <td>
                      <Stack direction="row" spacing={1} justifyContent="center">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaPDBT;
