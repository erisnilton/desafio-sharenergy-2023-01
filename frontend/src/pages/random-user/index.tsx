import React, { useEffect, useMemo } from "react";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { User } from "../../model/user";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Tooltip from "@material-ui/core/Tooltip";
import NavBar from "../../components/navbar";
import { Authenticated } from "../../components/Authenticated/Authenticated";
import { getUser } from "../../api";
import Input from "../../components/input";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  action: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  search: {
    width: "86%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  containerCard: {
    display: "flex",
    flexWrap: "wrap",
    gap: ".5rem",
  },
  card: {
    marginBottom: theme.spacing(2),
    width: "18rem",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "&:hover": {
      cursor: "pointer",
    },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
      marginLeft: 0,
      marginRight: 0,
      textAlign: "start",
    },
  },
  page: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
  },
}));

const RandomUser: React.FunctionComponent = () => {
  const [search, setSearch] = React.useState("");

  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const [users, setUsers] = React.useState([]);

  const [userFilterd, setUserFilterd] = React.useState([]);

  const classes = useStyles();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleLimit = (event: React.ChangeEvent<any>) => {
    setLimit(Number(event.target.value));
  };

  function getUsers({ page = 1, limit = 20 }) {
    getUser(page, limit)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }

  const filterUsers = useMemo(() => {
    const query = search.toLowerCase();
    return users.filter((user: User) => {
      return (
        user.name.first.toLowerCase().includes(query) ||
        user.name.last.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.login.username.toLowerCase().includes(query)
      );
    });
  }, [search, users]);

  useEffect(() => {
    getUsers({ limit, page });
  }, [limit, page]);

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.action}>
        <Input
          className={classes.search}
          name="pequise"
          label="Busque por nome, email, username"
          value={search}
          onChange={handleSearch}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="limit">Itens por Página</InputLabel>
          <Select
            id="demo-simple-select-outlined-label"
            labelId="limit"
            label="Itens por Página"
            value={limit}
            onChange={handleLimit}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.containerCard}>
        {filterUsers.map((user: User) => {
          return (
            <Card className={classes.card} key={user.login.uuid}>
              <img className={classes.img} src={user.picture.large} />
              <div className={classes.info}>
                <span>
                  <strong>
                    {user.name.title} {user.name.first} {user.name.last}
                  </strong>
                </span>
                <span
                  style={{ fontSize: 14 }}
                >{`${user.login.username} | ${user.dob.age} anos`}</span>
                <span style={{ fontSize: 14 }}>{user.email}</span>
              </div>
            </Card>
          );
        })}
      </div>
      <div>
        <Tooltip title="Anterior">
          <IconButton
            color="primary"
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Tooltip>
        <span className={classes.page}>{page}</span>
        <Tooltip title="Próximo">
          <IconButton color="primary" onClick={() => setPage(page + 1)}>
            <NavigateNextIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Authenticated(RandomUser);
