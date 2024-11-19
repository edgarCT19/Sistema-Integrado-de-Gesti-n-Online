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

const Add_TAR = () => {
  return (
    <div className="right-content">
      <div className="card">
        <Typography variant="h5" gutterBottom className="p-3">
          Agregar Nueva Tarifa
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
 
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Nombre
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Nombre"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/* DESCRIPCION */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Descripción
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                label="Descripción"
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

export default Add_TAR;
