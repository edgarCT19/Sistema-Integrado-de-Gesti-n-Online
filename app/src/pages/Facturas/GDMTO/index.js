import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";

const Tabla_GDMTO = () => {
  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Link to="/agregar_Factura">
            <Button
              variant="contained"
              className="mx-2"
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
                    Historial GDMTO
                  </th>
                </tr>
                <tr>
                  <th>Subestaciones</th>
                  <th>Periodo</th>
                  <th>Archivo</th>
                  <th>Días del periodo</th>
                  <th>Consumo</th>
                  <th>Demanda Máxima</th>
                  <th>Factor De Potencia</th>
                  <th>Factor de Carga</th>
                  <th>Cargo por Energía</th>
                  <th>Importe de Demanda Máxima</th>
                  <th>Importe Medición BT</th>
                  <th>Importe FP</th>
                  <th>DAP</th>
                  <th>IVA</th>
                  <th>Total a Pagar</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subestación 1</td>
                  <td>Enero</td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="1.5" 
                      stroke="currentColor" 
                      className="icon-large">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </td>
                  <td>30</td>
                  <td>1500 kWh</td>
                  <td>200 kW</td>
                  <td>0.95</td>
                  <td>0.85</td>
                  <td>$2,500</td>
                  <td>$500</td>
                  <td>$200</td>
                  <td>$50</td>
                  <td>$30</td>
                  <td>$400</td>
                  <td>$3,680</td>
                  <td>
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
                  </td>
                </tr>
                {/* Agrega más filas según sea necesario */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabla_GDMTO;
