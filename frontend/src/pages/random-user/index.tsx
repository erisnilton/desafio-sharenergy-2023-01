import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  action: { 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: theme.spacing(6),
  },
  search: {
    width: "60%",
  },
  page: {
    width: "20%",
  },
  button: {
    width: "auto",
    margin: 0,
  },
  containerCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  card: {
    flexGlow: 1,
    marginBottom: theme.spacing(2),
    width: "250px",
    heitght: "auto",
  },

  img: {
    width: "100%",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),

    "& span": {
      margin: theme.spacing(1, 0),
      color: theme.palette.text.secondary,
      fontSize: "1.1rem",
    },
  },
}));

const RandomUser: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState("");

  const classes = useStyles();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.action}>
        <TextField
          className={classes.search}
          variant="standard"
          id="standard-basic"
          label="Busque por nome, email, username"
          value={search}
          onChange={handleSearch}
        />

        <TextField
          className={classes.page}
          variant="standard"
          id="standard-basic"
          label="page"
          value={page}
          onChange={handlePage}
          type="number"
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Pequisar
        </Button>
      </div>

      <div className={classes.containerCard}>
        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/200" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>

        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>

        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>
        <Card className={classes.card}>
          <img className={classes.img} src="https://http.cat/100" />
          <div className={classes.info}>
            <span>Fulando de Tal</span>
            <span>fulname@gmail.com</span>
            <span>Fulanno</span>
            <span>20 anos</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RandomUser;
