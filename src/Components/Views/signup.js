import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import RegisterSuccess from "../RegisterSuccess";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        SNUMATO
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    opacity: "0.9",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputBase-input": {
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
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [reg, setreg] = useState(false);

  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [pass, setpass] = useState(null);
  const [mob, setmob] = useState(null);
  const credentials = {
    email: email,
    password: pass,
    first_name: fname,
    last_name: lname,
    mobile_num: mob,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(credentials));
    Axios.post("http://127.0.0.1:8000/user/register", credentials)
      .then((res) => {
        console.log(res.data);
        setreg(true);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Container
      style={{ background: "black", opacity: "0.9" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      {!reg ? (
        <div className={classes.paper}>
          {/*<Avatar className={classes.avatar}>
          <LockOutlinedIcon />
  </Avatar>*/}
          <Typography component="h1" variant="h5" style={{ color: "#EFF" }}>
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onInput={(e) => setfname(e.target.value)}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  color="secondary"
                  autoFocus
                  className={classes.textfield}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onInput={(e) => setlname(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  color="secondary"
                  className={classes.textfield}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onInput={(e) => setemail(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="secondary"
                  className={classes.textfield}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onInput={(e) => setpass(e.target.value)}
                  variant="outlined"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onInput={(e) => setmob(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="mob"
                  label="Mobile Number"
                  id="mob"
                  autoComplete="mobile no"
                  color="secondary"
                  className={classes.textfield}
                />
              </Grid>
              {/*<Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
  </Grid>*/}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/snumato-dbms/login_page"
                  variant="body2"
                  color="secondary"
                  style={{ textDecoration: "none" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      ) : (
        <RegisterSuccess />
      )}
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
