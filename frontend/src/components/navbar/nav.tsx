import { makeStyles, Tooltip } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/login";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getMenus } from "../utils/menu";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  nav: {
    "& ul": {
      color: theme.palette.primary.main,
      display: "flex",
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& strong": {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(2),
    },
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.action.hover,
        transition: "all 0.3s ease",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Nav: React.FunctionComponent = () => {
  const navitate = useNavigate();

  const username = localStorage.getItem("username");
  const [menus, setMenus] = useState([]);

  const classes = useStyles();

  const handleLogout = () => {
    logout().then(() => {
      navitate("/login");
    });
  };

  useEffect(() => {
    const menu = getMenus();
    setMenus(menu.items);
  }, []);
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          {menus.map((item: any) => (
            <li key={item.id}>
              <Link to={item.to}>{item.label}</Link>
              </li>
          ))}
        </ul>
      </nav>
      {username && (
        <div className={classes.profile}>
          <strong>{username}</strong>
          <Link to={"/login"} onClick={handleLogout}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Tooltip title="Sair">
                <ExitToAppIcon />
              </Tooltip>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav;
