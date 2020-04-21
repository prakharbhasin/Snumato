import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SNUMATO do
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  spacing: [0, 2, 4, 8],
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/user/foodess)",
    //backgroundImage: "url(" + img + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor:
    theme.palette.secondary.main,
    backgroundSize: "fill",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    opacity:"0.8"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    background: "black",
    opacity:"0.8"
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid style={{background:"black",opacity:"0.9"}}item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5" style={{color:"#EFF"}}>
            Sign in
          </Typography>
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
              color="secondary"
              style={{color:"#EFF"}}
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
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background:"#F05",opacity:"1"}}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="secondary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" color="secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <Box mt={50}>
            <Chip
              label="Image by Jennifer Pallian"
              component="a"
              href="https://unsplash.com/@foodess"
              clickable
              style={{ position: "absolute", left: "20vh",background:"black",opacity:"0.7",color:"#EFF" }}
            />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
