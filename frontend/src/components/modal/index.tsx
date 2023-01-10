import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(-20),
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    form: {
      width: "350px",
      display: "flex",
      flexDirection: "column",
      marginLeft: theme.spacing(2),
    },
    person: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      marginBottom: theme.spacing(2),
    },
    address: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      marginBottom: theme.spacing(2),
    },
    action: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      "& button": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [complement, setComplement] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [reference, setReference] = React.useState("");

  const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };
  const handleReference = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReference(event.target.value);
  };

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleNeighborhood = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(event.target.value);
  };

  const handleComplement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(event.target.value);
  };

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleStreet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getModalStyle() {
    const top = 0;
    const left = 0;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      overflow: "scroll",
    };
  }

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
          react-transition-group
        </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div  className={classes.paper}>
            <h2 id="transition-modal-title">New Costumer</h2>
            <div >
            <form className={classes.form}>
              <div className={classes.person}>
                <TextField
                  id="standard-basic"
                  label="name"
                  value={name}
                  onChange={handleName}
                />
                <TextField
                  id="standard-basic"
                  label="email"
                  value={email}
                  onChange={handleEmail}
                />
                <TextField
                  id="standard-basic"
                  label="phone"
                  value={phone}
                  onChange={handlePhone}
                />
                <TextField
                  id="standard-basic"
                  label="cpf"
                  value={cpf}
                  onChange={handleCpf}
                />
              </div>
              <div className={classes.address}>
                <TextField
                  id="standard-basic"
                  label="street"
                  value={street}
                  onChange={handleStreet}
                />
                <TextField
                  id="standard-basic"
                  label="number"
                  value={number}
                  onChange={handleNumber}
                />
                <TextField
                  id="standard-basic"
                  label="complement"
                  value={complement}
                  onChange={handleComplement}
                />
                <TextField
                  id="standard-basic"
                  label="neighborhood"
                  value={neighborhood}
                  onChange={handleNeighborhood}
                />
              </div>
              <div className={classes.address}>
                <TextField
                  id="standard-basic"
                  label="city"
                  value={city}
                  onChange={handleCity}
                />
                <TextField
                  id="standard-basic"
                  label="state"
                  value={state}
                  onChange={handleState}
                />

                <TextField
                  id="standard-basic"
                  label="country"
                  value={country}
                  onChange={handleCountry}
                />
                <TextField
                  id="standard-basic"
                  label="zipCode"
                  value={zipCode}
                  onChange={handleZipCode}
                />
              </div>
              <div className={classes.address}>
                <TextField
                  id="standard-basic"
                  label="reference"
                  value={reference}
                  onChange={handleReference}
                />
              </div>
              <div className={classes.action}>
                <Button variant="contained" color="primary" type="submit">
                  Cadastrar
                </Button>
                <Button variant="contained" color="secondary" type="button">
                  Cancelar
                </Button>
              </div>
            </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
