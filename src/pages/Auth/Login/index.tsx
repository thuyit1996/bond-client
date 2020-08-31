import React from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Grid, Box, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to="/123" color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export const Login = () => {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
    <Grid container>
      <Grid item xs>
        <Link to="/forgot-password">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link to="/register">
          {"Don't have an account? Sign"}
        </Link>
      </Grid>
    </Grid>
    <Box mt={5}>
      <Copyright />
    </Box>
  </form>
  )
}
