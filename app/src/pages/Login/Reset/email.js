import React from "react";
import {
    TextField,
    Button,
    InputAdornment,
    Box,
    Typography,
  } from "@mui/material";
  import { Email } from "@mui/icons-material";
  import logoUacam from "../../../assets/images/LogoUacamWeb.png";
  import logoYumkaax from "../../../assets/images/LogoYumkaax.png";

const Email_Pass_Reset = () => {
   return(
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      style={{
        backgroundImage: "url(your-background-image-url)",
        backgroundSize: "cover",
      }}
    >
      <img src={logoUacam} alt="Logo" style={{ width: 200, marginBottom: 16 }} />
      <Box
        p={4}
        bgcolor="white"
        borderRadius={2}
        textAlign="center"
        maxWidth={400}
        width="100%"
      >
        <Typography variant="h5" gutterBottom>
          Recuperar contraseña
        </Typography>

        <Typography variant="p" gutterBottom>
            Ingresa tu correo electrónico y en breve recibirás un código
            de seguridad para verificar que eres tú.
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Ingresa tu correo"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "var(--color-uacam-primary)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-uacam-primary)",
              },
            },
          }}
        />

        <Button
          variant="contained"
          width="auto"
          color="primary"
          style={{
            backgroundColor: "var(--color-uacam-primary)",
            marginTop: 6,
          }}
        >
          Confirmar
        </Button>

        <Box display="flex" alignItems="center" justifyContent="center" my={2}>
          <hr style={{ width: "45%", borderColor: "#ddd" }} />
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ margin: "0 8px" }}
          >
            &
          </Typography>
          <hr style={{ width: "45%", borderColor: "#ddd" }} />
        </Box>

        <img src={logoYumkaax} alt="Logo" style={{ width: 70 , height:70}} />
      </Box>
    </Box>
   );
}

export default Email_Pass_Reset;