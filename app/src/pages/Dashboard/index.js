import React from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import {
  BatteryChargingFull,
  BarChart,
  AttachMoney,
  Bolt,
} from "@mui/icons-material";

// Registro de los elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
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

  const lineData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s"],
    datasets: [
      {
        label: "Frecuencia (Hz)",
        data: [49.8, 50.0, 50.2, 49.9, 50.1, 49.7],
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        borderWidth: 2,
        tension: 0.4,
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

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12}>
          <Card
            sx={{
              padding: 2,
              height: "350px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ marginBottom: 1 }}
            >
              Frecuencia Energética
            </Typography>
            <Box sx={{ flexGrow: 1, position: "relative" }}>
              <Line
                data={lineData}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      ticks: {
                        stepSize: 0.1,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>

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
              Distribución Energética
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
              Consumo Energético Mensual
            </Typography>
            <Bar data={barData} />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              padding: 3,
              height: "100%",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Proyecciones de Consumo
            </Typography>
            <Bar data={barData} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              padding: 3,
              height: "100%",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Comparativa Energética
            </Typography>
            <Typography variant="body1" color="textSecondary">
              No hay datos disponibles.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
