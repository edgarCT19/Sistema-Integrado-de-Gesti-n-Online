import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Tabs,
  Tab,
  Button,
  Box,
  Grid,
  Divider,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import { Email, Phone, LocationOn, Lock, CorporateFare, Person, ToggleOn, } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [userData, setUserData] = useState({
    name: "Victor Gutierrez Lanz de Velasco",
    role: "Administrador",
    email: "em000001@uacam.mx",
    phone: "+52 9811234567",
    location: "Especial",
    status: "Activa",
    ur: "Facultad de Ingeniería",
    id: "000001",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangeTab = (_, newValue) => setTabIndex(newValue);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePasswordUpdate = () => {
    if (userData.newPassword === userData.confirmPassword && userData.newPassword !== "") {
      setPasswordUpdated(true);
      setTimeout(() => setPasswordUpdated(false), 3000);
    }
  };

  return (
    <Box className="right-content" sx={{ maxWidth: "100%", mx: "auto" }}>
      <Card className="shadow-lg p-4 bg-white rounded">
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                sx={{ width: 120, height: 120, boxShadow: 3 }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h5" fontWeight="bold">{userData.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{userData.role}</Typography>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Tabs value={tabIndex} onChange={handleChangeTab} indicatorColor="primary" centered>
              <Tab label="Información Personal" />
              <Tab label="Seguridad" />
            </Tabs>

            <Box mt={3} p={2} bgcolor="#f9f9f9" borderRadius={2}>
              {tabIndex === 0 && (
                <>
                  <div class="alert alert-warning mb-3" role="alert">
                  <i class="bi bi-exclamation-triangle-fill"></i> No puedes editar esta información.Si algún dato es incorrecto 
                  favor de contactar al administrador o a tú responsable.
                  </div>
                  <Grid container spacing={3}>
                    {[{ icon: <Email color="primary" />, text: userData.email },
                      { icon: <Phone color="primary" />, text: userData.phone },
                      { icon: <LocationOn color="primary" />, text: userData.location },
                      { icon: <CorporateFare color="primary" />, text: userData.ur },
                      { icon: <Person color="primary" />, text: userData.id },
                      { icon: <ToggleOn color="success" />, text: userData.status },
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                          <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            {item.icon}
                            <Typography variant="body1">{item.text}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}

              {tabIndex === 1 && (
                <>
                  {passwordUpdated && <div class="alert alert-success" role="alert">
                    <i class="bi bi-check2-circle"></i> Has realizado con éxito el cambio de tu contraseña.
                  </div>}
                  <div class="alert alert-warning mb-3" role="alert">
                  <i class="bi bi-exclamation-triangle-fill"></i> Cambia tu contraseña con una segura. Usa letras, simbolos y números.
                  </div>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth variant="outlined" type="password" name="password" value={userData.password} onChange={handleInputChange} label="Contraseña Actual" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth variant="outlined" type="password" name="newPassword" value={userData.newPassword} onChange={handleInputChange} label="Nueva Contraseña" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth variant="outlined" type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleInputChange} label="Confirmar Contraseña" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" startIcon={<Lock />} onClick={handlePasswordUpdate}>
                        Actualizar Contraseña
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
