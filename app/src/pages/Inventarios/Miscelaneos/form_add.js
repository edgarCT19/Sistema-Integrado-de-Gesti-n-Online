import React from "react";
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

const Add_Miscelaneo = () => {
  return (
    <div className="right-content">
      <div className="card">
        <Typography variant="h5" gutterBottom className="p-3">
          Agregar Misceláneo
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
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

            {/* Agrupación de Información del Misceláneo */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información del Misceláneo
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
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
                label="Misceláneo"
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

          {/* Botón de enviar centrado y largo */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: "var(--color-uacam-primary)",
                '&:hover': { backgroundColor: "var(--color-uacam-primary)" }
              }}
            >
              Guardar datos
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add_Miscelaneo;
