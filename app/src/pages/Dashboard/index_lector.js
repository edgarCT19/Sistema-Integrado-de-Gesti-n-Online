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

import Button from "@mui/material/Button";

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

const Lector = () => {
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
    return(
        <div className="right-content">

        <div class="card text-center">
            <div class="card-header">
                Bienvenido Director Juan Lopez Pedraza
            </div>
            <div class="card-body">
                <h5 class="card-title">UR: Facultad de Ciencias Sociales</h5>
                <p class="card-text">Oprime el botón para visualizar las estadistícas de la unidad a la que 
                    perteneces y puedas tomar las mejores decisiones para la institución.
                </p>
                <Button variant="contained">Ver datos estadistícos</Button>
            </div>
        </div>
  
        <div className="mt-2">
            <Grid container spacing={3}>
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
        </div>

      </div>
    )
}

export default Lector;