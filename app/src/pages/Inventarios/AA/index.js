import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Search from "../../../components/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import SelectUR from "../../../components/SelectUR";
import SelectTuple from "../../SelectTuple";
import Paginacion from "../../../components/Pagination";
import Tooltip from "@mui/material/Tooltip";

const Inventario_AA = () => {
  return (
    <div className="w-100 right-content">
      <div className="card">
        {/* Barra superior con campo de búsqueda y botones */}
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <SelectUR></SelectUR>

          <SelectTuple></SelectTuple>

          <Search className="search-bar" />

          <Link to="/agregar_AA">
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
                  <th colSpan="14" className="table-title text-center">
                    Tabla de Aires Aires Acondicionados
                  </th>
                </tr>
                <tr>
                  <th>Edificio</th>
                  <th>Nivel</th>
                  <th>Área</th>
                  <th>Tipo de A.A.</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Capacidad en BTU/HR</th>
                  <th>Voltaje</th>
                  <th>Amperaje</th>
                  <th>Potencia (en Watts)</th>
                  <th>Potencia en Kw</th>
                  <th>Uso al mes(horas)</th>
                  <th>Consumo al mes (KWh / mes)</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>Carrier</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>York</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>York</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>York</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>York</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
                  <td>A</td>
                  <td>PB</td>
                  <td>Sala de espera</td>
                  <td>Minisplit</td>
                  <td>York</td>
                  <td>YEAHA36GF5-ADF</td>
                  <td>36000</td>
                  <td>220</td>
                  <td>17.2</td>
                  <td>3784</td>
                  <td>3.784</td>
                  <td>130</td>
                  <td>491.92</td>
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
        <Paginacion></Paginacion>
      </div>
    </div>
  );
};

export default Inventario_AA;
