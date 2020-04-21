import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Restaurant from "./Views/Restaurant";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginTop: 20,
    height: 380
  },
  media: {
    height: 220
  }
});

export default function Card_restaurant(props) {
  const classes = useStyles();
  // const custom = customStyles();

  return (
    <Link to="/restaurant" style={{ textDecoration: "none" }}>
      <Grid item xs={6} direction="row" justify="center" alignItems="center">
      <Card className={classes.root} style={{ background: "black", opacity:"0.85" }}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/user/foodess"
              title={props.name}
            />
            <Typography gutterBottom variant="h5" component="h2" style={{color:"#f05"}}>
              {props.name}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p" style={{color:"#eef"}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Share
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </Link>
  );
}

// import React from "react";
// import { Paper, Grid, CardMedia, Card } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   spacing: [0, 2, 4, 8],
//   root: {
//     height: "100vh"
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   }
// }));

// export default function CardRes() {
//   const classes = useStyles();

//   return (
//     <Card style={{ padding: 20, marginTop: 20, maxWidth: "20%", height: 200 }}>
//       <CardMedia
//         component="img"
//         image="https://i.ytimg.com/vi/BY3PXd2zLT4/maxresdefault.jpg"
//       />
//     </Card>
//   );
// }
