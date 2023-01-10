import IconButton from "@material-ui/core/IconButton/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "../../components/navbar";

import { useEffect } from "react";
import { Authenticated } from "../../components/Authenticated/Authenticated";
import { getDogs } from "../../api";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",  
    
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0),

    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    }
  },

  container: {
    width: "400px",
    height: "400px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    } 

  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    shadow: "0 0 10px 0 rgba(0,0,0,0.5)",
    transition: "all 0.3s ease",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      overflow: "hidden",
    }
  },
}));

const RandomDog: React.FunctionComponent = () => {
  const [dog, setDog] = useState("");
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const handleRefresh = () => {
    setLoading(true);
    getDogs()
      .then((res) => res.json())
      .then((data) => {
        setDog(data.url);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className={classes.root}>
          <h1 className={classes.title}>Image de cachorro aleatória!</h1>
          <div className={classes.container}>
            <img className={classes.img} src={dog} alt="image of dog" />
            <IconButton
              aria-label="refresh"
              color="primary"
              onClick={handleRefresh}
            >
              <RefreshIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};
export default Authenticated(RandomDog);
