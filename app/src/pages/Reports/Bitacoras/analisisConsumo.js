import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analithycs_Energy = () => {
  // Función para generar los datos de las gráficas
  const generateData = (label) => ({
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: label,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  // Opciones de configuración comunes
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "Análisis Energético", font: { size: 20 } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
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
        <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {/* Gráfica 1 */}
            <div className="col" style={{ flex: "1 1 calc(50% - 20px)", maxWidth: "calc(50% - 20px)" }}>
            <div className="card" style={{ padding: "20px", backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
                <h4 style={{ textAlign: "center", color: "#333", fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>
                Consumo total por tipo de carga
                </h4>
                <Bar data={generateData("Energía A")} options={options} />
            </div>
            </div>
            
            {/* Gráfica 2 */}
            <div className="col" style={{ flex: "1 1 calc(50% - 20px)", maxWidth: "calc(50% - 20px)" }}>
            <div className="card" style={{ padding: "20px", backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
                <h4 style={{ textAlign: "center", color: "#333", fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>
                Consumo total por tipo de carga %
                </h4>
                <Bar data={generateData("Energía B")} options={options} />
            </div>
            </div>
            
            {/* Gráfica 3 */}
            <div className="col" style={{ flex: "1 1 calc(50% - 20px)", maxWidth: "calc(50% - 20px)" }}>
            <div className="card" style={{ padding: "20px", backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
                <h4 style={{ textAlign: "center", color: "#333", fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>
                Consumo total por edificio
                </h4>
                <Bar data={generateData("Energía C")} options={options} />
            </div>
            </div>
            
            {/* Gráfica 4 */}
            <div className="col" style={{ flex: "1 1 calc(50% - 20px)", maxWidth: "calc(50% - 20px)" }}>
            <div className="card" style={{ padding: "20px", backgroundColor: "#ffffff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
                <h4 style={{ textAlign: "center", color: "#333", fontSize: "18px", marginBottom: "20px", fontWeight: "600" }}>
                Consumo total por edificio %
                </h4>
                <Bar data={generateData("Energía D")} options={options} />
            </div>
            </div>
        </div>
    </div>
  );
};

export default Analithycs_Energy;
