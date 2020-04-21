import React from "react";
import {
  Grid,
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  ButtonGroup
} from "@material-ui/core";
//import StarIcon from "@material-ui/icons/Star";
// import Rating from "@material-ui/lab/Rating";
import Menu from "../Menu";

const useStyles = makeStyles({
  resHead: {
    marginTop: 20,
    width: "100%"
  },
  media: {
    height: 340
  },
  resName: {
    paddingTop: 20
  }
});

function Restaurant() {
  const classes = useStyles();
  return (
    <Grid container >
      <Card className={classes.resHead} style={{ background: "black", opacity:"0.85" }}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="https://static01.nyt.com/images/2018/08/08/dining/08Seasons1/08Seasons1-videoSixteenByNineJumbo1600.jpg"
              title="Food Food"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.resName}
              style={{color:"#F05"}}
            >
              Restaurant Name
            </Typography>
            <Typography variant="body2" component="p" style={{color:"#EFF"}}>
              One Line Short Description, we can decide about keeping or not
              keeping this one
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container alignItems="flex-start">
            <Typography style={{ paddingRight: 10, paddingLeft: 10,color:"#EFF" }}>
              Rate This Restaurant
            </Typography>
          </Grid>
          {/* {value !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
          )} */}
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Grid
            container
            alignItems="flex-start"
            justify="flex-end"
            direction="row"
          >
            <Button size="small" color="secondary">
              Learn More
            </Button>
          </Grid>
        </CardActions>
      </Card>
      <Menu />
    </Grid>
  );
}

export default Restaurant;
