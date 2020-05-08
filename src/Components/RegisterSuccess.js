import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    opacity: "0.9",
  },
  button: {
    "& .MuiButton-contained": {
      backgroundColor: "red"
    },
    "& .MuiButton-text": {
        textDecoration: "none",
    }
  },
}));

const RegisterSuccess = () => {
  const classes = useStyles();

  return (
    <Container
      style={{ background: "black", opacity: "0.9" }}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Paper className={classes.paper}>
        {/*<Avatar className={classes.avatar}>
            <LockOutlinedIcon />
    </Avatar>*/}
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "#EFF", marginTop: "10px" }}
        >
          SUCCESSFUL!
        </Typography>
        <Typography variant="h6" style={{ color: "#EFF" }}>
          You can go back to login page and use SNUMATO using your credentials
          now
        </Typography>
        <Link to="/snumato-dbms/login_page">
          <Button variant="contained" color="secondary" className={classes.button}>
            login page
          </Button>
        </Link>
      </Paper>
    </Container>
  );
};

export default RegisterSuccess;
