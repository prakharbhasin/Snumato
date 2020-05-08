import React from "react";
import { Typography, Grid, Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";

class About_us extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }} align="center">
        <div
          style={{
            background: "black",
            width: "250px",
            border: "2px solid #F05",
            borderRadius: "7%",
            height: "110px",
            marginBottom: "10px",
          }}
        >
          <h1
            style={{
              color: "#F05",
              fontSize: "43px",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            ABOUT US
          </h1>
        </div>
        {/* <Grid
          container
          justify="space-evenly"
          spacing={1}
          style={{ marginLeft: "1.4%" }}
        > */}
          <Grid container direction="row" justify="center">
            <Grid item>
              <Card
                style={{
                  background: "black",
                  opacity: "0.95",
                  maxWidth: "345px",
                  minWidth: "345px",
                  height: "380px",
                  marginTop: "20px",
                }}
                align="center"
              >
                <Avatar
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    border: "3px solid #F05",
                  }}
                />
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  Abhisht Singh
                </Typography>
                <p style={{ color: "#999" }}>
                  Mobile App Developer | Competitive Coder | ❤️ Open Source |
                  CSE Undergrad - Shiv Nadar University
                </p>
                <Typography variant="h6" color="secondary">
                  abhisht51@gmail.com
                </Typography>
              </Card>
            </Grid>
            <Grid item>
              <Card
                style={{
                  background: "black",
                  opacity: "0.95",
                  maxWidth: "345px",
                  minWidth: "345px",
                  height: "380px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
                align="center"
              >
                <Avatar
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    border: "3px solid #F05",
                  }}
                />
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  Prakhar Bhasin
                </Typography>
                <p style={{ color: "#999" }}>
                  whole
                  <br /> lotta
                  <br /> slatt
                </p>
                <Typography variant="h6" color="secondary">
                  pbhasin400@gmail.com
                </Typography>
              </Card>
            </Grid>
            <Grid item>
              <Card
                style={{
                  background: "black",
                  opacity: "0.95",
                  maxWidth: "345px",
                  minWidth: "345px",
                  height: "380px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
                align="center"
              >
                <Avatar
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    border: "3px solid #F05",
                  }}
                />
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  Kirtik Singh
                </Typography>
                <p style={{ color: "#999" }}>
                  CSE Sophomore at Shiv Nadar University with a keen interest in
                  the technical sector. Passionate, meticulous and dynamic
                  individual.
                </p>
                <Typography variant="h6" color="secondary">
                  ki426@snu.edu.in
                </Typography>
              </Card>
            </Grid>
            <Grid item>
              <Card
                style={{
                  background: "black",
                  opacity: "0.95",
                  maxWidth: "345px",
                  minWidth: "345px",
                  height: "380px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
                align="center"
              >
                <Avatar
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    border: "3px solid #F05",
                  }}
                />
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{ fontFamily: "Josefin Sans, sans-serif" }}
                >
                  Bhavya Jain
                </Typography>
                <p style={{ color: "#999" }}>
                  I am a Web Developer and Machine Learning enthusiast. I'm
                  interested in learning things that provide utility and make a
                  difference.
                </p>
                <Typography variant="h6" color="secondary">
                  bj855@snu.edu.in
                </Typography>
              </Card>
            </Grid>
          </Grid>
        {/* </Grid> */}
      </div>
    );
  }
}

export default About_us;
