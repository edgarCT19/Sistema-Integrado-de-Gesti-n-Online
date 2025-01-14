import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["0-10", "11-20", "21-30", "31-40", "41-50"], // Rangos
    datasets: [
      {
        label: "Frecuencia",
        data: [5, 15, 25, 10, 8], // Frecuencias
        borderColor: "rgba(75, 192, 192, 1)", // Color de la línea
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Color de relleno
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Color de los puntos
        pointBorderColor: "#fff",
        tension: 0.4, // Suavidad de la curva (0 para líneas rectas)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico de Frecuencias (Línea)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Rangos",
        },
      },
      y: {
        title: {
          display: true,
          text: "Frecuencia",
        },
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} height={"80px"} />;
};

export default LineChart;
