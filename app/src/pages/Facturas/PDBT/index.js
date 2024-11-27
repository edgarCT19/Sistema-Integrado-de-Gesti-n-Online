import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";

const Tabla_PDBT = () => {
  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Link to="/agregar_tarifa">{ /* editar para agregar tarifa */}
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

        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
                <tr>
                  <th colSpan="3" className="table-title text-center">
                    Tabla de Tarifas
                  </th>
                </tr>
                <tr>
                  <th className="table-title text-center">Tarifa</th>
                  <th className="table-title text-center">Descripción</th>
                  <th className="table-title text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PDBT</td>
                  <td>Pequeña Demanda (hasta 25 kW-mes) en Baja Tensión</td>
                  <td>
                    <div className="d-flex actions justify-content-around">
                    <Stack direction="row" spacing={1}>
                                            <Link to="#">
                                                <Tooltip  title="Editar" placement="top">
                                                <IconButton aria-label="edit" size="small" color="primary">
                                                    <EditIcon fontSize="small" />
                                                </IconButton>
                                                </Tooltip>
                                            </Link>
                                            <Link to="#">
                                                <Tooltip title="Eliminar" placement="top">
                                                <IconButton aria-label="delete" size="small" color="error">
                                                    <DeleteIcon fontSize="small"/>
                                                </IconButton>
                                                </Tooltip>
                                            </Link>
                                        </Stack>
                    </div>
                  </td>
                </tr>
                <tr className="active-row">
                  <td>GDBT</td>
                  <td>Gran Demanda (mayor a 25 kW-mes) en Baja Tensión	</td>
                  <td>
                    <div className="d-flex actions justify-content-around">
                      <Stack direction="row" spacing={1}>
                        <Link to="#">
                          <IconButton
                            aria-label="edit"
                            size="small"
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Link>
                        <Link to="#">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Link>
                      </Stack>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>GDMTH</td>
                  <td>Gran Demanda en Media Tensión horaria</td>
                  <td>
                    <div className="d-flex actions justify-content-around">
                      <Stack direction="row" spacing={1}>
                        <Link to="#">
                          <IconButton
                            aria-label="edit"
                            size="small"
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Link>
                        <Link to="#">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Link>
                      </Stack>
                    </div>
                  </td>
                </tr>
                <tr className="active-row">
                  <td>GDMTO</td>
                  <td>Gran Demanda en Media Tensión ordinaria	</td>
                  <td>
                    <div className="d-flex actions justify-content-around">
                      <Stack direction="row" spacing={1}>
                        <Link to="#">
                          <IconButton
                            aria-label="edit"
                            size="small"
                            color="primary"
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Link>
                        <Link to="#">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            color="error"
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Link>
                      </Stack>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabla_PDBT;
