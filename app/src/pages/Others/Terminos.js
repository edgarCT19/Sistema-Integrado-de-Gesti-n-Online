import React, { useState } from "react";
import { Container, Typography, Paper, Button, Checkbox, FormControlLabel, dividerClasses } from "@mui/material";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    alert("Has aceptado los Términos y Condiciones.");
  };

  return (
    <div className="right-content">
      <Paper elevation={3} sx={{ p: 4, textAlign: "justify" }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Términos y Condiciones de Uso
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenido al sistema de gestión de la Universidad. Al acceder o utilizar este sistema,
          aceptas cumplir con los siguientes términos y condiciones de uso.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Uso del Sistema
        </Typography>
        <Typography variant="body1" paragraph>
          Este sistema está destinado exclusivamente para estudiantes, docentes y personal autorizado de la Universidad.
          No debes compartir tu cuenta ni credenciales con terceros.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Privacidad y Protección de Datos
        </Typography>
        <Typography variant="body1" paragraph>
          La Universidad protege la privacidad de sus usuarios. Tu información personal se manejará con estricta confidencialidad,
          conforme a las normativas de protección de datos aplicables.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Responsabilidades del Usuario
        </Typography>
        <Typography variant="body1" paragraph>
          El usuario se compromete a utilizar el sistema de forma ética y responsable. Cualquier intento de acceso no autorizado
          o uso indebido de la plataforma será sancionado según las normativas universitarias.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Modificaciones a los Términos
        </Typography>
        <Typography variant="body1" paragraph>
          La Universidad se reserva el derecho de modificar estos términos en cualquier momento. Te recomendamos revisar
          periódicamente esta sección para estar informado sobre posibles cambios.
        </Typography>

        <FormControlLabel
          control={<Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />}
          label="He leído y acepto los términos y condiciones."
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAccept}
          disabled={!accepted}
          sx={{ mt: 2 }}
        >
          Aceptar
        </Button>
      </Paper>
    </div>
  );
};

export default TermsAndConditions;
