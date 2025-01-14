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
import { Visibility, VisibilityOff, Lock, Email, PrivacyTip } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logoUacam from "../../assets/images/LogoUacamWeb.png";
import logoYumkaax from "../../assets/images/LogoYumkaax.png";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
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
          SIG-Online
        </Typography>

        <TextField
          variant="outlined"
          placeholder="Ingresa tu correo"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
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

        <TextField
          variant="outlined"
          placeholder="Ingresa tu contraseña"
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
                <IconButton onClick={handleClickShowPassword} edge="end">
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

        {/* Link "¿Olvidaste tu contraseña?" */}
        <Box display="flex" justifyContent="flex-start" mt={1} mb={2}>
          <Link
            href="/reset-password"
            style={{
              color: "var(--color-uacam-primary)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-uacam-secondary)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-uacam-primary)")}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>

        <Button
          variant="contained"
          width="auto"
          color="primary"
          style={{
            backgroundColor: "var(--color-uacam-primary)",
            marginTop: 6,
          }}
        >
          Ingresar
        </Button>

        {/* Link "Avisos de privacidad" */}
        <Box display="flex" justifyContent="flex-start" mt={2}>
          <Link
            href="https://uacam.mx/paginas/ver/249"
            sx={{
              color: "var(--color-uacam-primary)",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              "&:hover": {
                color: "var(--color-uacam-secondary)",
                textDecoration: "none", // Evita el subrayado en hover
              },
            }}
          >
            <PrivacyTip style={{ marginRight: 4 }} />
            Avisos de privacidad
          </Link>
        </Box>

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

export default Login;
