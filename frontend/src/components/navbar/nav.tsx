import { makeStyles, Typography } from "@material-ui/core";
import { Link, Route, Routes } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& ul": {
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      listStyle: "none",
      padding: 0,
      margin: 0,
      "& li": {
        margin: theme.spacing(0, 2),
        [theme.breakpoints.down("sm")]: {
          margin: theme.spacing(0, 1),
        },
        "& a": {
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:hover": {
            color: theme.palette.action.hover,
            transition: "all 0.3s ease",
          },
        },
      },
    },
  },
}));

const Nav: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to={"/"}>Random User</Link>
        </li>
        <li>
          <Link to={"/random-dog"}>Random Dog</Link>
        </li>
        <li>
          <Link to={"/http-cat"}>Http Cat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
