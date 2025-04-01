import React, { useState } from "react";
import { Button, IconButton, Tooltip, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Pagination from "@mui/material/Pagination";

// Componente Paginación
const Paginacion = ({ totalItems, itemsPerPage, currentPage, handlePageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "var(--color-uacam-primary)",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&.Mui-selected": {
              backgroundColor: "var(--color-uacam-secondary)",
              color: "#000",
              "&:hover": {
                backgroundColor: "var(--color-uacam-secondary)",
              },
            },
          },
        }}
      />
    </div>
  );
};

// Componente TablaPDBT
const TablaPDBT = () => {
  // Datos de facturas solo para el año 2024
  const facturas2024 = [
    { mes: "Enero", archivo: "Archivo 1", historial: "Historial 2024", subestaciones: "Sub A", dias: 30, consumo: 1000, cargoEnergia: 1500, demandaMaxima: 500, dap: 100, iva: 290, total: 2390 },
    { mes: "Febrero", archivo: "Archivo 2", historial: "Historial 2024", subestaciones: "Sub B", dias: 28, consumo: 1200, cargoEnergia: 1600, demandaMaxima: 550, dap: 120, iva: 320, total: 2640 },
    { mes: "Marzo", archivo: "Archivo 3", historial: "Historial 2024", subestaciones: "Sub C", dias: 31, consumo: 1100, cargoEnergia: 1550, demandaMaxima: 530, dap: 110, iva: 310, total: 2500 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Solo 1 página por año (2024)

  // Cambiar de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Obtener las facturas para el año actual (2024)
  const facturasPorAño = facturas2024;

  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Button variant="contained" color="success" endIcon={<AddCircleOutlineIcon />}>
            Agregar
          </Button>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            {/* Tabla de facturas */}
            <table className="styled-table text-center">
              <thead>
                <tr>
                  <th colSpan="15" className="table-title text-center" style={{background:"var(--color-uacam-bitacora)"}}>
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
                {facturasPorAño.map((factura, index) => (
                  <tr key={index}>
                    <td>{factura.mes}</td>
                    <td>
                      <Tooltip title="Archivo PDF">
                        <IconButton aria-label="file" size="small">
                          <PictureAsPdfIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
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
                        <Tooltip title="Ver detalles" placement="top">
                          <IconButton aria-label="view" size="small" color="primary">
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" placement="top">
                          <IconButton aria-label="delete" size="small" color="error">
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Paginación */}
            <Paginacion
              totalItems={facturasPorAño.length} // Número de facturas por año
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaPDBT;
