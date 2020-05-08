import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme, StylesProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NearMeIcon from '@material-ui/icons/NearMe';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DeckIcon from '@material-ui/icons/Deck';
import InputIcon from '@material-ui/icons/Input';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
//import "../Components/homepage.css";
import { Button, Grid } from "@material-ui/core";
import "../resources/CSS/navbar.css";
import { useStoreState, useStoreActions } from "easy-peasy";

const BTstyle = {
  opacity: "0.8",
  //background: "#C34",
  alignItems: "justify",
  margin: "10px",
  padding: "5px",
  fontSize: "16px",
  //fontFamily:"Bree Serif"
};

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paperColor: {
    background: "black",
    // opacity: "0.8"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navbar(props) {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { loggedName, isLogged, token } = useStoreState((state) => ({
    loggedName: state.loggedName,
    isLogged: state.isLogged,
    token: state.token,
  }));
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fetchCart = useStoreActions((action) => action.fetchCart);
  // useEffect(() => fetchCart, [token, cart]);

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ background: "black" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onMouseOver={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              //noWrap
              // style={{ opacity: "1",  }}
              to="/snumato-dbms"
              component={Link}
              className="logo-main"
              style={{ fontFamily: "Josefin Sans, sans-serif" }}
            >
              SNUMATO
            </Typography>
            <Grid
              container
              justify="flex-end"
              direction="row"
              alignItems="flex-start"
            >
              {isLogged ? (
                <Button
                  style={BTstyle}
                  to="/snumato-dbms/account"
                  color="secondary"
                  variant="text"
                  // disableRipple={true}
                  className="BT logo-main"
                  component={Link}
                  // onClick={toAccountpage}
                >
                  Hello, {loggedName}
                </Button>
              ) : (
                <Button
                  style={BTstyle}
                  to="/snumato-dbms/login_page"
                  color="secondary"
                  variant="text"
                  component={Link}
                  className="BT logo-main"
                >
                  LOGIN/SIGN UP
                </Button>
              )}
              <IconButton
                aria-label="delete"
                style={BTstyle}
                to="/snumato-dbms/cart"
                color="secondary"
                variant="text"
                component={Link}
                className="BT logo-main"
                onClick={() => fetchCart(token)}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          
          onMouseOver={handleDrawerOpen}
          onMouseOut={handleDrawerClose}
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.paperColor, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon style={{ color: "#F05" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button  classname="listItem">
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <MonetizationOnIcon/>
              </ListItemIcon>
              <ListItemText primary="Today's Deals" style={{color:"white"}}/>
            </ListItem>
            <ListItem button  classname="listItem">
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <NearMeIcon/>
              </ListItemIcon>
              <ListItemText primary="Near Me" style={{color:"white"}}/>
            </ListItem>
            <ListItem button  classname="listItem" to="/snumato-dbms/Restaurant_page" component={Link}>
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <DeckIcon/>
              </ListItemIcon>
              <ListItemText primary="Browse" style={{color:"white"}}/>
            </ListItem>
              {/*<Link
                to="/snumato-dbms"
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <ListItem button key={text} className="listItem">
                  <ListItemIcon style={{ color: "white" }}>
                   {[<MonetizationOnIcon/>,<InfoIcon/>,<InputIcon/>]}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "#F05" }} />
                </ListItem>
                
              </Link>
              ))}*/}
          </List>
          <Divider />
          <List>
          <ListItem button  classname="listItem" to="/snumato-dbms/Login_page" component={Link}>
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <InputIcon/>
              </ListItemIcon>
              <ListItemText primary="Login" style={{color:"white"}}/>
            </ListItem>
            <ListItem button  classname="listItem">
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary="Support" style={{color:"white"}}/>
            </ListItem>
            <ListItem button  classname="listItem" to="/snumato-dbms/About_us" component={Link}>
            <ListItemIcon style={{color:"white",marginLeft:"8px"}}>
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary="About Us" style={{color:"white"}}/>
            </ListItem>
            {/*{["Login", "Support", "About us"].map((text, index) => (
              <Link
                to="/snumato-dbms/login_page"
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <ListItem button key={text} className="listItem">
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "white" }} />
                </ListItem>
              </Link>
            ))}*/}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </StylesProvider>
  );
}
