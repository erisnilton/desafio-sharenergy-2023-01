import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/login";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(12),
    backgroundColor: theme.palette.background.default,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
    margin: "0 auto",
  },

  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
  },

  logo: {
    width: "100%",
    objectFit: "cover",

    marginBottom: theme.spacing(2),
  },
  username: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  password: {
    width: "100%",
  },
  check: {
    width: "100%",
    marginBottom: theme.spacing(2),
    textAlign: "start",
  },
  login: {
    width: "100%",
  },
  error: {
    color: "red",
    textAlign: "start",
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [usename, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [checked, setChecked] = useState(
    localStorage.getItem("remember") === "true"
  );

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (checked) {
      submit();
    }
  }, []);

  function submit(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    login(usename, password, checked)
      .then((response) => {
        setError(false);
        navigate("/");
        console.log(response);
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
        console.log(error);
      });
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation={4}>
        <div className={classes.content}>
          <div>
            <img
              className={classes.logo}
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="logo"
            />
          </div>

          <form onSubmit={submit}>
            <div className={classes.username}>
              <TextField
                className={classes.username}
                id="standard-basic"
                label="username"
                value={usename}
                onChange={handleUsername}
              />
            </div>

            <div className={classes.password}>
              <TextField
                className={classes.password}
                id="standard-basic"
                label="password"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className={classes.check}>
              <FormControlLabel
                value={checked}
                control={
                  <Checkbox
                    color="primary"
                    onChange={handleChange}
                    checked={checked}
                  />
                }
                label="Lembrar-me"
                labelPlacement="end"
              />
            </div>
            <div className={classes.error}>
              {error && <p>{errorMessage}</p>}
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.login}
            >
              Login
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
