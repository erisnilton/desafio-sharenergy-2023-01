import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { findCustumer } from "../../api";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  card: {
    width: 900,
    minWidth: 300,
    margin: "auto",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    "& p": {
      margin: 0,
      padding: 15,
    },
  },
});

const CustomerDetails = (props: any) => {
  const { id } = props;
  const [customer, setCustomer] = useState("" as any);
  const classes = useStyles();

  useEffect(() => {
    findCustumer(id as string)
      .then((response: any) => response.json())
      .then((data: any) => {
        setCustomer(data);
      });
  }, [id]);

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <p>
          <strong>ID: </strong> {customer?.id}
        </p>
        <p>
          <strong>Name: </strong>
          {customer?.name}
        </p>
        <p>
          <strong>Email: </strong>
          {customer?.email}
        </p>
        <p>
          <strong>Address: </strong>
          {customer?.address}
        </p>
        <p>
          <strong>Phone: </strong>
          {customer?.phone}
        </p>
      </div>
    </div>
  );
};

export default CustomerDetails;
