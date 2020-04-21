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
import { Link } from "react-router-dom";
//import "../Components/homepage.css";
import { Button, Grid } from "@material-ui/core";
import "../resources/CSS/navbar.css"

const BTstyle = {
  opacity: "0.8",
  //background: "#C34",
  alignItems: "justify",
  margin: "10px",
  padding: "5px",
  fontSize:"16px"
  //fontFamily:"Bree Serif"
  
};


const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paperColor: {
    background: "black",
    opacity: "0.8"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer(props) {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ background: "black" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              //noWrap
              style={{ opacity: "1", color: "#F05", textDecoration: "none" }}
              to="/"
              component={Link}
            >
              SNUMATO
            </Typography>
            <Grid container justify="flex-end" direction="row" alignItems="flex-start">
        <Button
          style={BTstyle}
          to="/login_page"
          color="secondary"
          variant="text"
          component={Link}
          className="BT"
        >
          LOGIN/SIGN UP
        </Button>
        </Grid> 
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx(classes.paperColor, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
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
            {["Today's deals", "Near Me", "Browse"].map((text, index) => (
              <Link to="./" style={{ textDecoration: "none", color: "inherit" }}>
                <ListItem button key={text} className="listItem">
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "#F05" }} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {["Login", "Support", "About us"].map((text, index) => (
              <Link
                to="./login_page"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem button key={text} className="listItem">
                  <ListItemIcon style={{ color: "white" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{ color: "white" }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography> */}
          {children}
        </main>
      </div>
    </StylesProvider>
  );
}

// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// const drawerWidth = 180;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   menuButton: {
//     marginRight: 36
//   },
//   hide: {
//     display: "none"
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: "nowrap"
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerClose: {
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     overflowX: "hidden",
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9) + 1
//     }
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3)
//   }
// }));

// // const useStyles = makeStyles(theme => ({
// //   root: {
// //     display: "flex"
// //   },
// //   drawer: {
// //     [theme.breakpoints.up("sm")]: {
// //       width: drawerWidth,
// //       flexShrink: 0
// //     }
// //   },
// //   appBar: {
// //     [theme.breakpoints.up("sm")]: {
// //       width: `calc(100% - ${drawerWidth}px)`,
// //       marginLeft: drawerWidth
// //     }
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //     [theme.breakpoints.up("sm")]: {
// //       display: "none"
// //     }
// //   },
// //   // necessary for content to be below app bar
// //   toolbar: theme.mixins.toolbar,
// //   drawerPaper: {
// //     width: drawerWidth
// //   },
// //   content: {
// //     flexGrow: 1,
// //     padding: theme.spacing(3)
// //   }
// // }));

// function ResponsiveDrawer(props) {
//   const { container, children } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.toolbar} />
//       {/* <Divider /> */}
//       <List>
//         {["Near Me", "Browse", "", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             className={classes.menuButton}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             SNUMATO
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <nav className={classes.drawer} aria-label="mailbox folders">
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Hidden smUp implementation="css">
//           <Drawer
//             container={container}
//             variant="temporary"
//             anchor={theme.direction === "rtl" ? "right" : "left"}
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             ModalProps={{
//               keepMounted: true // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden xsDown implementation="css">
//           <Drawer
//             classes={{
//               paper: classes.drawerPaper
//             }}
//             variant="permanent"
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//       </nav>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         {children}
//       </main>
//     </div>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.any
// };

// export default ResponsiveDrawer;
