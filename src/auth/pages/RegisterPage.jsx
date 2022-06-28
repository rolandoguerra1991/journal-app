import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthLayout from "../layout/AuthLayout";

const formData = {
  email: "",
  password: "",
  displayName: ''
}

const RegisterPage = () => {
  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Ingresa tu nombre completo"
              fullWidth
              name="displayName"
              onChange={onInputChange}
              value={displayName}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electronico"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="*******"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
