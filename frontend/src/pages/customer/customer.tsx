import React, { useState, useEffect } from "react";
import PeopleIcon from "@material-ui/icons/People";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Search from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";
import Toolbar from "@material-ui/core/Toolbar";

import PageHeader from "../../components/page-header";
import Navbar from "../../components/navbar";
import { Authenticated } from "../../components/Authenticated/Authenticated";
import { getCustumers } from "../../api";
import Input from "../../components/input";
import Button from "../../components/button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import Popup from "../../components/popup";
import CustomerForm from "./customerForm";
import * as customerService from "../../services/customerService";
import { Customer } from "../../model/customer";
import ConfirmDialog from "../../components/confirm-dialog";
import CustomerDetails from "../details";
import Tooltip from "@material-ui/core/Tooltip";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: "100%",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
  table: {
    minWidth: 700,
  },
}));

const Costumer: React.FunctionComponent = () => {
  const classes = useStyles();

  const [change, setChange] = useState(false);
  const [customers, setCustomers] = useState([] as Customer[]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [customerDetailsId, setCustomerDetailsId] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const addOrEdit = (customer: any, resetForm: any) => {
    if (customer.id == "") {
      customerService.insertCustomer(customer).then(() => {
        setOpenPopup(false);
        setChange(!change);
      });
    } else {
      customerService.updateCostumer(customer).then(() => {
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setChange(!change);
      });
    }
  };

  const openInPopupDetails = (item: any) => {
    setCustomerDetailsId(item);
    setOpenDetails(true);
  };

  const openInPopup = (item: any) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  const onDelete = (id: string) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    customerService.deleteCustomer(id);
    setChange(!change);
  };

  useEffect(() => {
    customerService.getAllCustomers().then((res) => {
      setCustomers(res);
    });
  }, [change]);

  return (
    <>
      <Navbar />
      <div className={classes.pageContent}>
        <Toolbar>
          <Button
            text="Novo"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Telefone</StyledTableCell>
                <StyledTableCell>CPF</StyledTableCell>
                <StyledTableCell align="center">ação</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <StyledTableRow key={customer?.id}>
                  <TableCell>{customer?.name}</TableCell>
                  <TableCell>{customer?.email}</TableCell>
                  <TableCell>{customer?.phone}</TableCell>
                  <TableCell>{customer?.cpf}</TableCell>
                  <TableCell
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Tooltip title="Editar">
                      <IconButton
                        color="primary"
                        style={{ marginRight: "5px" }}
                      >
                        <EditOutlinedIcon
                          fontSize="small"
                          onClick={() => {
                            openInPopup(customer);
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Detalhes">
                      <IconButton
                        color="primary"
                        style={{ marginLeft: "5px" }}
                        onClick={() => {
                          openInPopupDetails(customer.id);
                        }}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Deletar">
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title:
                              "Tem certeza que deseja apagar esse cliente?",
                            subTitle: "Você não poderá desfazer essa ação",
                            onConfirm: () => {
                              onDelete(customer.id);
                            },
                          });
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Popup
        title="Formulário de cliente"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <CustomerForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>

      <Popup
        title="Informação do cliente"
        openPopup={openDetails}
        setOpenPopup={setOpenDetails}
      >
        <CustomerDetails id={customerDetailsId} />
      </Popup>

      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default Authenticated(Costumer);
