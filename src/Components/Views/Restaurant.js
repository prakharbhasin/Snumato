import React from "react";
import {
  Grid,
  Card,
  makeStyles,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Menu from "../Menu";

const useStyles = makeStyles({
  resHead: {
    marginTop: 20,
    width: "100%",
  },
  media: {
    height: 340,
  },
  resName: {
    paddingTop: 20,
  },
});
const StyledRating = withStyles({
  iconFilled: {
    color: "#FFF",
  },
  iconHover: {
    color: "#F05",
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function Restaurant(props) {
  const classes = useStyles();
  const {
    restaurant_id,
    name,
    location,
    working_hours,
    cost_for_two,
  } = props.location.state;

  return (
    <Grid container justify="center">
      <Card className={classes.resHead} style={{ background: "black" }}>
        {/* <CardActionArea> */}
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
              style={{ color: "#F05" }}
            >
              {name}
            </Typography>
            <Box
              component="fieldset"
              mb={7}
              borderColor="transparent"
              align="right"
            >
              <Grid container>
                <Grid item xs={6}>
                  <Typography style={{ color: "white" }} align="left">
                    {location}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{ color: "white" }}>Restaurant Rating</Typography>
                  <Rating
                    name="customized-icons"
                    defaultValue={4}
                    readOnly
                    IconContainerComponent={IconContainer}
                    style={{ color: "#F05" }}
                  />
                </Grid>
                <Grid item xs={6} align="left">
                  <Typography
                    style={{ color: "white" }}
                    align="left"
                    variant="inherit"
                  >
                    Working Hours: {working_hours}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} align="left" style={{ paddingTop: "8px" }}>
                <Typography
                  style={{ color: "white" }}
                  align="left"
                  variant="inherit"
                >
                  Cost for Two: {cost_for_two}
                </Typography>
              </Grid>
            </Box>
          </CardContent>
        {/* </CardActionArea> */}
        <CardActions>
          <Grid container alignItems="flex-start">
            <Typography
              style={{ paddingRight: 10, paddingLeft: 10, color: "#EFF" }}
            >
              Rate This Restaurant
            </Typography>
            <StyledRating
                    name="customized-icons"
                    defaultValue={5}
                    // readOnly
                    IconContainerComponent={IconContainer}
                    style={{ color: "#F05" }}
                  />
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
        <Menu id={restaurant_id} />
      </Card>
    </Grid>
  );
}

export default Restaurant;
