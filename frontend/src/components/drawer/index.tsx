import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/login";
import Divider from "@material-ui/core/Divider";
import { getMenus } from "../../utils/menu";

const useStyles = makeStyles({
  list: {
    width: 300,
    marginTop: 50,
    marginLeft: 50,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  listItem: {
    padding: 10,

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});
export default function DrawerLeft() {
  const [state, setState] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

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

  const handleClick = (label: string) => {
    if (label === "Random User") {
      navigate("/");
    }
    if (label === "Random Dogs") {
      navigate("/random-dog");
    }

    if (label === "HTTP Cat") {
      navigate("/http-cat");
    }
    if (label === "Customer") {
      navigate("/customer");
    }
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.menu}>
        {menus.items.map((item) => (
          <ListItem
            className={classes.listItem}
            button
            key={item.id}
            onClick={() => handleClick(item.label)}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider style={{ marginLeft: -50 }} />
      <List className={classes.menu}>
        <ListItem
          className={classes.listItem}
          button
          key="Logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <ListItemText primary="Sair" />
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
