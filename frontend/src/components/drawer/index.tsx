import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useNavigate, NavLink } from "react-router-dom";

import { logout } from "../../services/login";
import Divider from "@material-ui/core/Divider";
import { getMenus } from "../../utils";
import Avatar from "@material-ui/core/Avatar";
import { LOGO_URL as logo } from "../../utils";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    margin: theme.spacing(4, 4),
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(4),
  },
  listItem: {
    padding: theme.spacing(2, 0),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  profile: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: theme.spacing(4),

    "& span": {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  logout: {
    display: "flex",
    width: "100%",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",

    "& span": {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.common.black,
    },
  },
  divider: {
    width: "100%",
  },
}));
export default function DrawerLeft() {
  const [state, setState] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const menus = getMenus();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.profile}>
        <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
        <span>{username}</span>
      </div>
      <Divider className={classes.divider} />
      <List className={classes.menu}>
        {menus.items.map((item) => (
          <div className={classes.listItem} key={item.id}>
            <NavLink className={classes.link} to={item.to}>
                <Avatar>{item.label.at(0)}</Avatar>
                <span>{item.label}</span>
            </NavLink>
          </div>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List className={classes.menu}>
        <ListItem className={classes.listItem}>
          <div className={classes.logout}>
            <Link
              className={classes.link}
              to={"/login"}
              onClick={() => {
                logout();
              }}
            >
              <Avatar>
                <ExitToAppIcon />
              </Avatar>
              <span>Sair</span>
            </Link>
          </div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
      >
        <MenuIcon style={{ fontSize: "2.2rem" }} />
      </IconButton>
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
