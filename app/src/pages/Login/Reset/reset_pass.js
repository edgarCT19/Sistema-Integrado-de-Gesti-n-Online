import React from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Link,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Lock,
  Email,
  PrivacyTip,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoUacam from "../../../assets/images/LogoUacamWeb.png";
import logoYumkaax from "../../../assets/images/LogoYumkaax.png";

const New_Password = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

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
      <img
        src={logoUacam}
        alt="Logo UACAM"
        style={{ width: 200, marginBottom: 16 }}
      />
      <Box
        p={4}
        bgcolor="white"
        borderRadius={2}
        textAlign="center"
        maxWidth={400}
        width="100%"
      >
        <Typography variant="h5" gutterBottom>
          SIG-Online
        </Typography>

        <Typography variant="body2" gutterBottom>
          La nueva contraseña debe contener mayúsculas (A, B, C, etc.),
          minúsculas (a, b, c, etc.), símbolos (¡!, ¿?, $, &, #, etc.) y números
          (1, 2, 3, etc.), con el fin de crear una contraseña fuerte ante
          ataques cibernéticos.
        </Typography>

        {/* Campo de nueva contraseña */}
        <TextField
          variant="outlined"
          placeholder="Nueva contraseña"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
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

        {/* Campo de confirmar contraseña */}
        <TextField
          variant="outlined"
          placeholder="Confirmar contraseña"
          fullWidth
          margin="normal"
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
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

export default New_Password;
