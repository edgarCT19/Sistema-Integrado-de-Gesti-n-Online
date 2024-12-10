import React, { useState } from "react";
import { Button, IconButton, Tooltip, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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
  // Datos de facturas para los 12 meses de 2024 y 2025
  const facturas2024 = [
    { mes: "Enero", archivo: "Archivo 1", historial: "Historial 2024", subestaciones: "Sub A", dias: 30, consumo: 1000, cargoEnergia: 1500, demandaMaxima: 500, dap: 100, iva: 290, total: 2390 },
    { mes: "Febrero", archivo: "Archivo 2", historial: "Historial 2024", subestaciones: "Sub B", dias: 28, consumo: 1200, cargoEnergia: 1600, demandaMaxima: 550, dap: 120, iva: 320, total: 2640 },
    { mes: "Marzo", archivo: "Archivo 3", historial: "Historial 2024", subestaciones: "Sub C", dias: 31, consumo: 1100, cargoEnergia: 1550, demandaMaxima: 530, dap: 110, iva: 310, total: 2500 },
    { mes: "Abril", archivo: "Archivo 4", historial: "Historial 2024", subestaciones: "Sub D", dias: 30, consumo: 1050, cargoEnergia: 1500, demandaMaxima: 520, dap: 115, iva: 300, total: 2440 },
    { mes: "Mayo", archivo: "Archivo 5", historial: "Historial 2024", subestaciones: "Sub E", dias: 31, consumo: 950, cargoEnergia: 1400, demandaMaxima: 510, dap: 100, iva: 270, total: 2320 },
    { mes: "Junio", archivo: "Archivo 6", historial: "Historial 2024", subestaciones: "Sub F", dias: 30, consumo: 1100, cargoEnergia: 1600, demandaMaxima: 540, dap: 105, iva: 320, total: 2505 },
    { mes: "Julio", archivo: "Archivo 7", historial: "Historial 2024", subestaciones: "Sub G", dias: 31, consumo: 1000, cargoEnergia: 1500, demandaMaxima: 500, dap: 110, iva: 290, total: 2400 },
    { mes: "Agosto", archivo: "Archivo 8", historial: "Historial 2024", subestaciones: "Sub H", dias: 31, consumo: 950, cargoEnergia: 1450, demandaMaxima: 480, dap: 105, iva: 270, total: 2300 },
    { mes: "Septiembre", archivo: "Archivo 9", historial: "Historial 2024", subestaciones: "Sub I", dias: 30, consumo: 1050, cargoEnergia: 1500, demandaMaxima: 520, dap: 115, iva: 300, total: 2445 },
    { mes: "Octubre", archivo: "Archivo 10", historial: "Historial 2024", subestaciones: "Sub J", dias: 31, consumo: 1100, cargoEnergia: 1550, demandaMaxima: 530, dap: 120, iva: 310, total: 2490 },
    { mes: "Noviembre", archivo: "Archivo 11", historial: "Historial 2024", subestaciones: "Sub K", dias: 30, consumo: 1000, cargoEnergia: 1500, demandaMaxima: 500, dap: 110, iva: 290, total: 2395 },
    { mes: "Diciembre", archivo: "Archivo 12", historial: "Historial 2024", subestaciones: "Sub L", dias: 31, consumo: 900, cargoEnergia: 1350, demandaMaxima: 480, dap: 95, iva: 270, total: 2295 },
  ];

  const facturas2025 = [
    { mes: "Enero", archivo: "Archivo 1", historial: "Historial 2025", subestaciones: "Sub A", dias: 30, consumo: 1100, cargoEnergia: 1450, demandaMaxima: 520, dap: 110, iva: 305, total: 2465 },
    { mes: "Febrero", archivo: "Archivo 2", historial: "Historial 2025", subestaciones: "Sub B", dias: 28, consumo: 1150, cargoEnergia: 1500, demandaMaxima: 530, dap: 115, iva: 315, total: 2555 },
    { mes: "Marzo", archivo: "Archivo 3", historial: "Historial 2025", subestaciones: "Sub C", dias: 31, consumo: 1050, cargoEnergia: 1500, demandaMaxima: 540, dap: 100, iva: 295, total: 2500 },
    { mes: "Abril", archivo: "Archivo 4", historial: "Historial 2025", subestaciones: "Sub D", dias: 30, consumo: 1100, cargoEnergia: 1500, demandaMaxima: 520, dap: 120, iva: 300, total: 2500 },
    { mes: "Mayo", archivo: "Archivo 5", historial: "Historial 2025", subestaciones: "Sub E", dias: 31, consumo: 1200, cargoEnergia: 1550, demandaMaxima: 540, dap: 125, iva: 320, total: 2700 },
    { mes: "Junio", archivo: "Archivo 6", historial: "Historial 2025", subestaciones: "Sub F", dias: 30, consumo: 1150, cargoEnergia: 1500, demandaMaxima: 530, dap: 115, iva: 315, total: 2580 },
    { mes: "Julio", archivo: "Archivo 7", historial: "Historial 2025", subestaciones: "Sub G", dias: 31, consumo: 1000, cargoEnergia: 1450, demandaMaxima: 500, dap: 110, iva: 290, total: 2440 },
    { mes: "Agosto", archivo: "Archivo 8", historial: "Historial 2025", subestaciones: "Sub H", dias: 31, consumo: 1100, cargoEnergia: 1550, demandaMaxima: 520, dap: 115, iva: 310, total: 2495 },
    { mes: "Septiembre", archivo: "Archivo 9", historial: "Historial 2025", subestaciones: "Sub I", dias: 30, consumo: 1050, cargoEnergia: 1500, demandaMaxima: 510, dap: 120, iva: 295, total: 2445 },
    { mes: "Octubre", archivo: "Archivo 10", historial: "Historial 2025", subestaciones: "Sub J", dias: 31, consumo: 1200, cargoEnergia: 1600, demandaMaxima: 540, dap: 120, iva: 330, total: 2700 },
    { mes: "Noviembre", archivo: "Archivo 11", historial: "Historial 2025", subestaciones: "Sub K", dias: 30, consumo: 1150, cargoEnergia: 1550, demandaMaxima: 530, dap: 120, iva: 315, total: 2590 },
    { mes: "Diciembre", archivo: "Archivo 12", historial: "Historial 2025", subestaciones: "Sub L", dias: 31, consumo: 1100, cargoEnergia: 1500, demandaMaxima: 520, dap: 115, iva: 310, total: 2495 },
  ];
  const facturas2026 = [
    { mes: "Enero", archivo: "Archivo 1", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Febrero", archivo: "Archivo 2", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Marzo", archivo: "Archivo 3", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Abril", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Mayo", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Junio", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Julio", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Agosto", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Septiembre", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Octubre", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Noviembre", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
    { mes: "Diciembre", archivo: "Archivo 4", historial: "", subestaciones: "", dias: null, consumo: null, cargoEnergia: null, demandaMaxima: null, dap: null, iva: null, total: null },
  ];



  // Combinamos las facturas de ambos años
  const facturasCompletas = [...facturas2024, ...facturas2025, ...facturas2026];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // 1 página por año (2024 o 2025)

  // Cambiar de página
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Obtener las facturas para el año actual
  const facturasPorAño = currentPage === 1 ? facturas2024 : currentPage === 2 ? facturas2025 : facturas2026;

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
            <h3 className="text-center">Historial PDBT {
            currentPage === 1 ? '2024' : currentPage === 2 ? '2025' :'2026'}</h3>

            {/* Tabla de facturas */}
            <table className="styled-table text-center">
              <thead>
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
                      <Tooltip title="Archivo">
                        <IconButton aria-label="file" size="small">
                          <AttachFileIcon fontSize="small" />
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
                          <IconButton
                            aria-label="view"
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

            {/* Paginación */}
            <Paginacion
              totalItems={3} // Dos páginas, una por cada año
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
