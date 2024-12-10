import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Tooltip, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../GDBT/style.css";

const TablaGDBT = () => {
  const [facturas, setFacturas] = useState([
    {
      historial: "Historial 1",
      subestaciones: "Sub A",
      periodo: "Enero",
      dias: 31,
      consumo: 1200,
      demandaMaxima: 450,
      factorPotencia: 0.95,
      factorCarga: 0.85,
      importeDemanda: 1500,
      importeFP: 100,
      dap: 200,
      iva: 300,
      total: 2100,
    },
    {
      historial: "Historial 2",
      subestaciones: "Sub B",
      periodo: "Febrero",
      dias: 28,
      consumo: 950,
      demandaMaxima: 400,
      factorPotencia: 0.92,
      factorCarga: 0.80,
      importeDemanda: 1300,
      importeFP: 90,
      dap: 180,
      iva: 290,
      total: 1860,
    },
    {
      historial: "Historial 3",
      subestaciones: "Sub C",
      periodo: "Marzo",
      dias: 31,
      consumo: 1100,
      demandaMaxima: 430,
      factorPotencia: 0.93,
      factorCarga: 0.83,
      importeDemanda: 1450,
      importeFP: 120,
      dap: 190,
      iva: 310,
      total: 2070,
    },
  ]);

  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Link to="/agregar_factura">
            <Button
              variant="contained"
              color="success"
              endIcon={<AddCircleOutlineIcon />}
            >
              Agregar
            </Button>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
                <tr>
                  <th colSpan="16" className="table-title text-center">
                    Historial GDBT
                  </th>
                </tr>
                <tr>
                  <th>Historial GDBT</th>
                  <th>Subestaciones</th>
                  <th>Periodo</th>
                  <th>Archivo</th>
                  <th>Días del periodo</th>
                  <th>Consumo</th>
                  <th>Demanda Máxima</th>
                  <th>Factor de Potencia</th>
                  <th>Factor de Carga</th>
                  <th>Importe Demanda Máxima</th>
                  <th>Importe FP</th>
                  <th>DAP</th>
                  <th>IVA</th>
                  <th>Total a pagar</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((factura, index) => (
                  <tr key={index}>
                    <td>{factura.historial}</td>
                    <td>{factura.subestaciones}</td>
                    <td>{factura.periodo}</td>
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
                    <td>{factura.dias}</td>
                    <td>{factura.consumo}</td>
                    <td>{factura.demandaMaxima}</td>
                    <td>{factura.factorPotencia}</td>
                    <td>{factura.factorCarga}</td>
                    <td>{factura.importeDemanda}</td>
                    <td>{factura.importeFP}</td>
                    <td>{factura.dap}</td>
                    <td>{factura.iva}</td>
                    <td>{factura.total}</td>
                    <td>
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <Tooltip title="Editar" placement="top">
                          <IconButton
                            aria-label="edit"
                            size="small"
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" placement="top">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
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

export default TablaGDBT;
