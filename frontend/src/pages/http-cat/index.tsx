import { Button, Grid, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import { Authenticated } from "../../components/Authenticated/Authenticated";
import Input from "../../components/input";
import NavBar from "../../components/navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  button: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      width: "100%",
    },
  },
  input: {
    width: "100%",
  },

  containerImg: {
    margin: "0 auto",
    width: "50%",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      shadow: "0 0 10px 0 rgba(0,0,0,0.5)",
      transition: "all 0.3s ease",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const HttpCat: React.FunctionComponent = () => {
  const classes = useStyles();

  const [code, setCode] = React.useState("");
  const [image, setImage] = React.useState("");
  const [result, setResult] = React.useState(false);

  const handleCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setImage(`https://http.cat/${code}`);
    setResult(true);
  };
  return (
    <div>
      <NavBar />
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.input}>
          <Input
            className={classes.input}
            name="pequise"
            label="Digite um staus code"
            value={code}
            onChange={handleCode}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={code.length === 0}
          >
            Pequisar
          </Button>
        </div>
      </form>
      <div className={classes.containerImg}>
        {result && <img src={image} alt="HttpCat" />}
      </div>
    </div>
  );
};

export default Authenticated(HttpCat);
