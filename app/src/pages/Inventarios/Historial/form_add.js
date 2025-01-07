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

const Periodo_nuevo_inventario = () => {
    return(
        <div className="right-content">
            <div className="card">
                <Typography variant="h5" gutterBottom className="p-3">
                   Generar nuevo periodo de inventario energético
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
                        Periodo de duración
                    </Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Fecha / Hora de Inicio"
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
                            required
                            label="Fecha / Hora de Finalización"
                            type="datetime-local"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Notificación u observaciones
                    </Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        label="Escribe la nota o la observación"
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
                    Generar periodo de inventario
                    </Button>
                </Box>
                </Box>
            </div>
        </div>
    );
}

export default Periodo_nuevo_inventario;