import React from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import { Doughnut, Bar, Line } from "react-chartjs-2";
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
import {
    BatteryChargingFull,
    BarChart,
    AttachMoney,
    Bolt,
  } from "@mui/icons-material";


// Registrar componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ResponsableUR = () => {
  // Configuración de datos para el gráfico
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

  // Configuración de opciones para el gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico de Frecuencias de consumo energético",
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

    const indicadores = [
      {
        label: "Producción",
        value: "85%",
        icon: <BatteryChargingFull sx={{ fontSize: 40, color: "#42A5F5" }} />,
      },
      {
        label: "Consumo",
        value: "70%",
        icon: <Bolt sx={{ fontSize: 40, color: "#FFA726" }} />,
      },
      {
        label: "Costo",
        value: "$1200",
        icon: <AttachMoney sx={{ fontSize: 40, color: "#66BB6A" }} />,
      },
      {
        label: "Eficiencia",
        value: "90%",
        icon: <BarChart sx={{ fontSize: 40, color: "#AB47BC" }} />,
      },
    ];

    const doughnutData = {
    labels: ["Energía Solar", "Energía Eólica", "Otros"],
    datasets: [
        {
        data: [300, 150, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
    ],
    };

    const barData = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            label: "Consumo Energético (kWh)",
            data: [65, 59, 80, 81, 56],
            backgroundColor: "#42A5F5",
            borderColor: "#1E88E5",
            borderWidth: 1,
          },
        ],
      };

  // Estructura del componente
  return (
    <div className="right-content">
      <Grid container spacing={3}>
        {indicadores.map((indicador, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                padding: 3,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
            >
              {indicador.icon}
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ marginTop: 1 }}
              >
                {indicador.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: 1,
                  fontWeight: "bold",
                  color: "var(--color-uacam-datatext)",
                }}
              >
                {indicador.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="mt-2">
      <div className="card">
        <Line data={data} options={options} height={80} />
      </div>
      <div className="mt-2">
        <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={4}>
            <Card
            sx={{
                padding: 3,
                height: "100%",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            >
            <Typography variant="h6" gutterBottom>
                Distribución Energética de Facultad de Humanidades
            </Typography>
            <Doughnut data={doughnutData} />
            </Card>
        </Grid>

        <Grid item xs={12} md={8}>
            <Card
            sx={{
                padding: 3,
                height: "100%",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
            >
            <Typography variant="h6" gutterBottom>
                Consumo Energético Mensual de la Unidad
            </Typography>
            <Bar data={barData} />
            </Card>
        </Grid>
        </Grid>
      </div>
      </div>
    </div>
  );
};

export default ResponsableUR;
