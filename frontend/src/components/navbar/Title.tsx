import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

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
          src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
          alt="logo"
          className={classes.logo}
        />
      </Typography>
    </Link>
  );
};

export default Title;
