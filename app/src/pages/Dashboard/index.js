import React from "react";
import { Card, Grid, Box, Typography, Button } from "@mui/material";
import "../../assets/styles/cardHomeAdmn.css";
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

  return (
    <div className="right-content">

      <div className="">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="card l-bg-orange-dark ">
                    <div className="card-statistic-3 p-4">
                        <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                        <div className="mb-4">
                            <h5 className="card-title mb-0">New Orders</h5>
                        </div>
                        <div className="row align-items-center mb-2 d-flex">
                            <div className="col-8">
                                <h2 className="d-flex align-items-center mb-0">3,243</h2>
                            </div>
                            <div className="col-4 text-right">
                                <span>12.5% <i className="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div className="progress mt-1" data-height="8" style={{ height: "8px" }}>
                            <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="card l-bg-blue-dark">
                    <div className="card-statistic-3 p-4">
                        <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                        <div className="mb-4">
                            <h5 className="card-title mb-0">Customers</h5>
                        </div>
                        <div className="row align-items-center mb-2 d-flex">
                            <div className="col-8">
                                <h2 className="d-flex align-items-center mb-0">15.07k</h2>
                            </div>
                            <div className="col-4 text-right">
                                <span>9.23% <i className="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div className="progress mt-1" data-height="8" style={{ height: "8px" }}>
                            <div className="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="card l-bg-orange-dark ">
                    <div className="card-statistic-3 p-4">
                        <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                        <div className="mb-4">
                            <h5 className="card-title mb-0">Ticket Resolved</h5>
                        </div>
                        <div className="row align-items-center mb-2 d-flex">
                            <div className="col-8">
                                <h2 className="d-flex align-items-center mb-0">578</h2>
                            </div>
                            <div className="col-4 text-right">
                                <span>10% <i className="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div className="progress mt-1" data-height="8" style={{ height: "8px" }}>
                            <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="card l-bg-blue-dark">
                    <div className="card-statistic-3 p-4">
                        <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign"></i></div>
                        <div className="mb-4">
                            <h5 className="card-title mb-0">Revenue Today</h5>
                        </div>
                        <div className="row align-items-center mb-2 d-flex">
                            <div className="col-8">
                                <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                            </div>
                            <div className="col-4 text-right">
                                <span>2.5% <i className="fa fa-arrow-up"></i></span>
                            </div>
                        </div>
                        <div className="progress mt-1" data-height="8" style={{ height: "8px" }}>
                            <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="card text-center mt-4">
        <div class="card-header">
          Datos claves de consumo energético
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{color:"var(--color-uacam-datatext)"}}>Facultad de Humanidades</h5>
          <p class="card-text">Unidad Responsable de mayor consumo energético</p>
          <Button variant="contained">Ver inventario</Button>
        </div>
      </div>
      
      <div class="text-center mt-4">
        <div class="row align-items-start">
          <div class="col">
            <div class="card">
              <div class="card-header">
                Quote
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p style={{color:"var(--color-uacam-datatext)"}}>A well-known quote, contained in a blockquote element.</p>
                  <footer class="blockquote-footer">Someone famous in</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header">
                Quote
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p style={{color:"var(--color-uacam-datatext)"}}>A well-known quote, contained in a blockquote element.</p>
                  <footer class="blockquote-footer">Someone famous in</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header">
                Quote
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p style={{color:"var(--color-uacam-datatext)"}}>A well-known quote, contained in a blockquote element.</p>
                  <footer class="blockquote-footer">Someone famous in</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

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
