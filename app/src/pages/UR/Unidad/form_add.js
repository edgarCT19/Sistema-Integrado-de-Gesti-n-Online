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

const Add_UR = () => {
    return(
        <div className="right-content">
            <div className="card">
                <Typography variant="h5" gutterBottom className="p-3">
                   Agregar nueva UR (Unidad Responsable)
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
                        Nombre de la Unidad Responsable
                    </Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Selecciona la Unidad Responsable</InputLabel>
                            <Select label="Selecciona la Unidad Responsable" defaultValue="">
                            <MenuItem value="01">01-Facultad de Ingeniería</MenuItem>
                            <MenuItem value="02">02-Centro de Estudios de Desarrollo Sustentable y Aprovechamiento de la Vida Silvestre</MenuItem>
                            <MenuItem value="03">03-Instituto de Ecología, Pesquerías y Oceanografías del Golfo de México</MenuItem>
                            <MenuItem value="04">04-Coordinación General de Gestión Ambiental para la Sustentabilidad Yum Kaax</MenuItem>
                            <MenuItem value="05">05-Centro de Investigaciones en Corrosión</MenuItem>
                            <MenuItem value="06">06-Escuela Preparatoria Dr. Nazario Víctor Montejo Godoy</MenuItem>
                            <MenuItem value="07">07-Facultad de Ciencias Sociales</MenuItem>
                            <MenuItem value="08">08-Facultad de Medicina</MenuItem>
                            <MenuItem value="09">09-Centro de Investigaciones Biomédicas</MenuItem>
                            <MenuItem value="10">10-Facultad de Enfermería</MenuItem>
                            <MenuItem value="11">11-Secretaría General</MenuItem>
                            <MenuItem value="12">12-Dirección de Administración y Servicios Escolares</MenuItem>
                            <MenuItem value="13">13-Dirección General de Servicios de Apoyo Educativo</MenuItem>
                            <MenuItem value="14">14-Escuela Preparatoria Lic. Ermilo Sandoval Campos</MenuItem>
                            <MenuItem value="15">15-Coordinación General de Bibliotecas</MenuItem>
                            <MenuItem value="16">16-Dirección General de Tecnologías de la Información</MenuItem>
                            <MenuItem value="17">17-Dirección General de Actividades Deportivas y Recreativas</MenuItem>
                            <MenuItem value="18">18-Centro de Estudios de Lenguas Extranjeras</MenuItem>
                            <MenuItem value="19">19-Dirección General de Estudios de Posgrado e Investigación</MenuItem>
                            <MenuItem value="20">20-Coordinación General de Vinculación y Extensión Académica</MenuItem>
                            <MenuItem value="21">21-Contraloría General</MenuItem>
                            <MenuItem value="22">22-SITAISUAC</MenuItem>
                            <MenuItem value="23">23-SUPAUAC</MenuItem>
                            <MenuItem value="24">24-FESAUAC</MenuItem>
                            <MenuItem value="25">25-Universidad Saludable</MenuItem>
                            <MenuItem value="26">26-Departamento de Microbiología Ambiental y Biotecnología</MenuItem>
                            <MenuItem value="27">27-Centro de Investigaciones Históricas y Sociales</MenuItem>
                            <MenuItem value="28">28-Facultad de Humanidades</MenuItem>
                            <MenuItem value="29">29-Facultad de Odontología</MenuItem>
                            <MenuItem value="30">30-Facultad de Derecho</MenuItem>
                            <MenuItem value="31">31-Rectoría</MenuItem>
                            <MenuItem value="32">32-Facultad de Contaduría y Administración</MenuItem>
                            <MenuItem value="33">33-Tesorería y Contabilidad</MenuItem>
                            <MenuItem value="34">34-Dirección General de Planeación y Calidad</MenuItem>
                            <MenuItem value="35">35-Dirección de Comunicación Social</MenuItem>
                            <MenuItem value="36">36-Oficina del Abogado General</MenuItem>
                            <MenuItem value="37">37-Coordinación General Académica</MenuItem>
                            <MenuItem value="38">38-Coordinación General de Asesores</MenuItem>
                            <MenuItem value="39">39-Centro de Investigaciones Jurídicas</MenuItem>
                            <MenuItem value="40">40-Dirección General de Difusión Cultural</MenuItem>
                            <MenuItem value="41">41-Museo Universitario de la Vida</MenuItem>
                            <MenuItem value="42">42-Departamento de Obras y Proyectos</MenuItem>
                            <MenuItem value="43">43-Dirección de Recursos Materiales</MenuItem>
                            <MenuItem value="44">44-Dirección de Recursos Humanos</MenuItem>
                            <MenuItem value="45">45-Dirección General de Servicios Administrativos</MenuItem>
                            <MenuItem value="46">46-Centro de Español y Maya</MenuItem>
                            <MenuItem value="47">47-Dirección General de Mantenimiento y Obras</MenuItem>
                            <MenuItem value="48">48-Radio Universidad</MenuItem>
                            <MenuItem value="49">49-Facultad de Ciencias Químico Biológicas</MenuItem>
                            <MenuItem value="50">50-Escuela Superior de Ciencias Agropecuarias</MenuItem>
                            <MenuItem value="51">51-Campus VII Tenabo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Responsable de la unidad
                    </Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Responsable</InputLabel>
                            <Select label="Responsable" defaultValue="">
                            <MenuItem value="Victor Lanz Gutierrez de Velasco">Victor Lanz Gutierrez de Velasco</MenuItem>
                            <MenuItem value="Manuel Estrada Segovia">Manuel Estrada Segovia</MenuItem>
                            <MenuItem value="José Aguilar Canepa">José Aguilar Canepa</MenuItem>
                            <MenuItem value="Lucía Herrera del Valle">Lucía Herrera del Valle</MenuItem>
                            <MenuItem value="Sofía Rivas Martínez">Sofía Rivas Martínez</MenuItem>
                            <MenuItem value="Diego Sánchez Padilla">Diego Sánchez Padilla</MenuItem>
                            <MenuItem value="Mariana Torres Alcántara">Mariana Torres Alcántara</MenuItem>
                            <MenuItem value="Javier Morales Esquivel">Javier Morales Esquivel</MenuItem>
                            <MenuItem value="Elena Navarro Ruiz">Elena Navarro Ruiz</MenuItem>
                            <MenuItem value="Carlos Vega Domínguez">Carlos Vega Domínguez</MenuItem>
                            <MenuItem value="Ana García Hernández">Ana García Hernández</MenuItem>
                            <MenuItem value="Fernando Ortiz Gallardo">Fernando Ortiz Gallardo</MenuItem>
                            <MenuItem value="Isabel Ramírez Lozano">Isabel Ramírez Lozano</MenuItem>
                            </Select>
                        </FormControl>
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
}

export default Add_UR;