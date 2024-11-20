import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import logoUacam from "../../../assets/images/LogoUacamWeb.png";
import logoYumkaax from "../../../assets/images/LogoYumkaax.png";

const Security_Code = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      style={{
        backgroundImage: "url(your-background-image-url)", // Reemplaza con tu imagen
        backgroundSize: "cover",
      }}
    >
      <img src={logoUacam} alt="Logo UACAM" style={{ width: 200, marginBottom: 16 }} />
      <Box
        p={4}
        bgcolor="white"
        borderRadius={2}
        textAlign="center"
        maxWidth={400}
        width="100%"
      >
        <Typography variant="h5" gutterBottom>
          Código de Seguridad
        </Typography>

        <Typography variant="body2" gutterBottom>
          Ingresa el código de 4 dígitos que se envió a tu correo electrónico registrado.
        </Typography>

        {/* Contenedor de los cuadros */}
        <Box display="flex" justifyContent="center" gap={2} my={2}>
          {[...Array(4)].map((_, index) => (
            <TextField
              key={index}
              variant="outlined"
              inputProps={{
                maxLength: 1, // Solo un carácter por cuadro
                style: {
                  textAlign: "center",
                  fontSize: "1.5rem",
                  padding: "8px",
                },
              }}
              sx={{
                width: 50,
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
          ))}
        </Box>

        <Button
          variant="contained"
          style={{
            backgroundColor: "var(--color-uacam-primary)",
            marginTop: 16,
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

        <img
          src={logoYumkaax}
          alt="Logo Yumkaax"
          style={{ width: 70, height: 70 }}
        />
      </Box>
    </Box>
  );
};

export default Security_Code;
