import React, { useState } from "react";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Redirect } from "react-router-dom";

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

// const CssTextField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "white",
//     },
//     "& .MuiInputLabel-root": {
//       color: "rgb(255,0,85)",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "green",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "rgb(255,0,85)",
//       },
//       "&:hover fieldset": {
//         borderColor: "rgb(255,0,85)",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "white",
//       },
//     },
//   },
// })(TextField);

const useStyles = makeStyles((theme) => ({
  spacing: [0, 2, 4, 8],
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/user/foodess)",
    //backgroundImage: "url(" + img + ")",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.secondary.main,
    backgroundSize: "fill",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    // opacity:"0.8"
  },
  textfield: {
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "rgb(255,0,85)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(255,0,85)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(255,0,85)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        color: "white",
      },
      "& .MuiInputBase-input": {
        color: "white",
      },
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    background: "black",
    // opacity:"0.8"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  checkbox: {
    "& .MuiFormControlLabel-label": {
      color: "rgb(255,0,85)",
    },
    "& .MuiCheckbox-root": {
      color: "rgb(255,0,85)",
    },
  },
}));

export default function SignInSide() {
  const login = useStoreActions((action) => action.login);
  const isLogged = useStoreState(state=>state.isLogged);
  const classes = useStyles();
  const [email, setemail] = useState(null);
  const [pass, setpass] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email=", email, "pass=", pass);
    Axios.post("http://127.0.0.1:8000/user/login", {
      email: email,
      password: pass,
    })
      .then((res) => (res = res.data))
      .then((res) => {
        console.log(res);
        if (res.status == "success") login(res.user_data.first_name);
      })
      .catch((error) => console.log(error.message));
  };

  if(isLogged){
    return <Redirect push to="/snumato-dbms" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        style={{ background: "black" }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={{ color: "#EFF" }}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onInput={(e) => setemail(e.target.value)}
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
              className={classes.textfield}
            />
            <TextField
              onInput={(e) => setpass(e.target.value)}
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
              className={classes.textfield}
            />
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  value="remember"
                  color="secondary"
                  // icon={<span/>}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: "#F05", opacity: "1" }}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  color="secondary"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/snumato-dbms/signup"
                  variant="body2"
                  color="secondary"
                  style={{ textDecoration: "none" }}
                >
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
              style={{
                position: "absolute",
                left: "20vh",
                background: "black",
                color: "#EFF",
              }}
            />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
