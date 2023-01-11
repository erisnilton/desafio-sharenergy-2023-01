import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Nav from "./nav";
import Title from "./Title";
import DrawerLeft from "../drawer";

import useIsSmallWindows from "../../hooks/useIsSmallWindows";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
      alignSelf: "flex-start",
    },
  },
}));

const Navbar: FunctionComponent = () => {
  const classes = useStyles();

  const smallWindow = useIsSmallWindows();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" variant="outlined">
        <Toolbar className={classes.toolbar}>
          <Title />
          {smallWindow ? <DrawerLeft /> : <Nav />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
