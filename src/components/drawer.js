import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Form from "./form";
import Radio from "./radio";
import Results from "./results";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "hsl(43, 13%, 90%)",
    height: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "hsl(360, 79%, 32%)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    position: "absolute",
    left: 20,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  list: {
    marginTop: 20,
    padding: "0 30px",
  },
  // necessary for content to be below app bar
  toolbar: {
    height: 64,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "hsl(40, 23%, 97%)",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  lowerContent: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

function ResponsiveDrawer(props) {
  const {
    handleRadioButtonChange,
    handleFormValueChange,
    typeObj,
    measurements,
    selectedType,
    window,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography
          style={{
            padding: "20px 60px",
            fontSize: 18,
            fontWeight: 600,
            color: "hsl(41, 8%, 48%)",
          }}
        >
          Measurement
        </Typography>
      </div>
      <Divider />
      <List className={classes.list}>
        <Radio
          handleRadioButtonChange={handleRadioButtonChange}
          selectedType={selectedType}
        />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ fontWeight: 600, color: "hsl(360, 33%, 95%)" }}
            variant="h6"
            noWrap
          >
            Ring Size Converter
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography style={{ color: "hsl(37, 11%, 28%)" }} paragraph>
          Find your ring size in all different measurements. Select your
          measurement type in the sidebar on the left, select the nearest
          measurement in the dropown menu and check the conversions you would
          like.
        </Typography>
        <Typography style={{ color: "hsl(37, 11%, 28%)" }} paragraph>
          If you want to find your measurement yourself. Wrap a thin piece of
          paper or string around your finger to a snug fit. Mark where the paper
          or string overlaps and measure the length on a ruler. This measurement
          is your circumference in millimetres or inches. You can use this
          measurement to convert it to other measurements.
        </Typography>
        <Divider style={{ marginTop: 20 }} />
        <div className={classes.lowerContent}>
          <Form
            handleFormValueChange={handleFormValueChange}
            typeObj={typeObj}
            measurements={measurements}
            selectedType={selectedType}
          />
          <Results measurements={measurements} />
        </div>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
