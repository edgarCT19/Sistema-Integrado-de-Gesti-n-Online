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


const Add_Subestacion = () => {
    return(
        <div className="right-content">
            <div className="card">
                <Typography variant="h5" gutterBottom className="p-3">
                    Agregar nueva Subestación
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
                        Información de Subestación
                    </Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Número de servicio"
                            type="number"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField 
                        required
                        label="Número de medidor"
                        type="number"
                        variant="outlined"
                        fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                        <InputLabel>Selecciona la Tarifa</InputLabel>
                        <Select label="Selecciona la Tarifa" defaultValue="">
                        <MenuItem value="PDBT">PDBT</MenuItem>
                        <MenuItem value="GDBT">GDBT</MenuItem>
                        <MenuItem value="GDMTH">GDMTH</MenuItem>
                        <MenuItem value="GDMTO">GDMTO</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField 
                        required
                        label="Multiplicador"
                        type="number"
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
    )
}

export default Add_Subestacion;