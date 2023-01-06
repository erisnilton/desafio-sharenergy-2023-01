import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Nav from "./nav";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGlow: 1,
    marginBottom: theme.spacing(10),
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 1),
    },
  },
}));

const Navbar: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Grid container className={classes.grid}>
            <Grid item xs={8}>
              <Title />
            </Grid>
            <Grid item xs={4}>
              <Nav />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
