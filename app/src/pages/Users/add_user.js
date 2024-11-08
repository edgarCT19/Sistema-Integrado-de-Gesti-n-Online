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

const Add_User = () => {
  return (
    <div className="w-100 right-content">
      <div className="card">
        <Typography variant="h5" gutterBottom className="p-3">
          Agregar Usuario
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
            {/* Agrupación de Información de Usuario */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información del Usuario
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Matrícula (ID)"
                variant="outlined"
                fullWidth
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Nombre(s)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Apellido(s)"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Correo Institucional"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="No. Telefônico"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/* Agrupación de Información Adicional */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información Adicional
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Unidad Responsable</InputLabel>
                <Select label="Unidad Responsable" defaultValue="">
                  <MenuItem value="Unidad 1">Unidad 1</MenuItem>
                  <MenuItem value="Unidad 2">Unidad 2</MenuItem>
                  <MenuItem value="Unidad 3">Unidad 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Rol</InputLabel>
                <Select label="Rol" defaultValue="">
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Usuario">Usuario</MenuItem>
                  <MenuItem value="Invitado">Invitado</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Estado de la Cuenta</InputLabel>
                <Select label="Estado de la Cuenta" defaultValue="">
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                  <MenuItem value="Suspendido">Suspendido</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Agrupación de Fechas */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Fechas de Alta y Baja
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Fecha / Hora de Alta"
                type="datetime-local"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fecha / Hora de Baja"
                type="datetime-local"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          {/* Botón de enviar centrado y largo */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "50%", backgroundColor: "var(--color-uacam-primary)", '&:hover': { backgroundColor: "var(--color-uacam-primary)" } }}
            >
              Guardar datos
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add_User;
