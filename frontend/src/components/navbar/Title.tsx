import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LOGO_URL as logo } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
  logo: {
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 180,
    }
  },
}));

const Title: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Link to={"/"}>
      <Typography className={classes.root}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
        />
      </Typography>
    </Link>
  );
};

export default Title;
