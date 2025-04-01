import React from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Settings = () => {
  return (
    <Container className="right-content" maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
      <Paper elevation={4} sx={{ borderRadius: 3, p: 4, bgcolor: "#f9f9f9" }}>
        <CardContent>
          {/* Encabezado */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Configuración del Sistema
            </Typography>
            <FormControlLabel control={<Switch color="primary" />} label="Modo Oscuro" />
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Sección de Personalización de Colores */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            🎨 Personalización de Colores
          </Typography>
          <Grid container spacing={2}>
            {["Color Primario", "Color Secundario", "Color de Fondo", "Color de Texto"].map((label, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField fullWidth label={label} variant="outlined" />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Sección de Archivos */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            📂 Archivos del Sistema
          </Typography>
          <Grid container spacing={2}>
            {["Logo Principal", "Logo Secundario", "Tipografía", "Animación"].map((label, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={2}
                  sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: 2, bgcolor: "#fff" }}
                >
                  <UploadFileIcon sx={{ mr: 2, color: "primary.main" }} />
                  <input type="file" style={{ flex: 1 }} />
                </Paper>
                <Typography variant="caption">{label}</Typography>
              </Grid>
            ))}
          </Grid>

          {/* Botón de Guardar Configuración */}
          <Button variant="contained" fullWidth sx={{ mt: 4, py: 1.5, fontSize: "1rem" }}>
            Guardar Configuración
          </Button>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default Settings;