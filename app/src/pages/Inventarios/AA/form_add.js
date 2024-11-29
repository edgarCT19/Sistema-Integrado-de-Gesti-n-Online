import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
  Divider
} from "@mui/material";
import Loading from "../../../components/Loading"; // Importa el componente Loading

const Add_AA = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simular proceso de guardar datos
    setTimeout(() => {
      setLoading(false);
      alert("Datos guardados correctamente.");
    }, 2000); // Simula un tiempo de espera de 2 segundos
  };

  return (
    <div className="right-content">
      <div className="card" style={{ position: "relative" }}>
        {loading && ( // Mostrar Loading mientras el estado sea true
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 10
            }}
          >
            <Loading />
          </Box>
        )}
        <Typography variant="h5" gutterBottom className="p-3">
          Agregar Aire Acondicionado
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} // Manejar el evento de envío
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            "& .MuiFormControl-root": { width: "100%" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--color-uacam-primary)"
              },
              "&:hover fieldset": {
                borderColor: "var(--color-uacam-primary)"
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-uacam-primary)"
              }
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--color-uacam-primary)"
            }
          }}
        >
          <Grid container spacing={3}>
 {/* Agrupación de Ubicación */}
 <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información de Ubicación
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Edificio</InputLabel>
                <Select label="Edificio" defaultValue="">
                  <MenuItem value="A">Edificio A</MenuItem>
                  <MenuItem value="B">Edificio B</MenuItem>
                  <MenuItem value="C">Edificio C</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Nivel</InputLabel>
                <Select label="Nivel" defaultValue="">
                  <MenuItem value="PB">PB</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Área</InputLabel>
                <Select label="Área" defaultValue="">
                  <MenuItem value="oficina">Oficina</MenuItem>
                  <MenuItem value="sala">Sala de Espera</MenuItem>
                  <MenuItem value="aula">Aula</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Agrupación de Información del Equipo */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información del Equipo
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Tipo de A.A.</InputLabel>
                <Select label="Tipo de A.A." defaultValue="">
                  <MenuItem value="minisplit">Minisplit</MenuItem>
                  <MenuItem value="ventana">Ventana</MenuItem>
                  <MenuItem value="central">Central</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Marca"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Modelo"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Capacidad en BTU/HR</InputLabel>
                <Select label="Capacidad en BTU/HR" defaultValue="">
                  <MenuItem value="12000">12,000</MenuItem>
                  <MenuItem value="18000">18,000</MenuItem>
                  <MenuItem value="24000">24,000</MenuItem>
                  <MenuItem value="36000">36,000</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Agrupación de Especificaciones Técnicas */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Especificaciones Técnicas
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                label="Voltaje"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                label="Amperaje"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                label="Potencia (en Watts)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Potencia en Kw"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Uso al mes (horas)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Consumo al mes (KWh / mes)"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading} // Deshabilitar el botón mientras carga
              sx={{
                width: "50%",
                backgroundColor: "var(--color-uacam-primary)",
                "&:hover": { backgroundColor: "var(--color-uacam-primary)" }
              }}
            >
              {loading ? "Guardando..." : "Guardar datos"}
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add_AA;
