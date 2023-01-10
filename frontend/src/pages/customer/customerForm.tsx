import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import Button from "../../components/button";
import { Form } from "../../components/form";
import Input from "../../components/input";
import { useForm } from "../../hooks/useform";

const initialFValues = {
  id: "",
  name: "",
  email: "",
  phone: "",
  cpf: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
  reference: "",
};

const CustomerForm: React.FunctionComponent = (props) => {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Essa campo é obrigatório.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email não é válido.";
    if ("phone" in fieldValues)
      temp.phone = fieldValues.phone ? "" : "Esse campo é obrigatório.";
    if ("cpf" in fieldValues)
      temp.cpf = fieldValues.cpf ? "" : "Esse campo é obrigatório.";
    if ("street" in fieldValues)
      temp.street = fieldValues.street ? "" : "Esse campo é obrigatório.";
    if ("number" in fieldValues)
      temp.number = fieldValues.number ? "" : "Esse campo é obrigatório.";
    if ("complement" in fieldValues)
      temp.complement = fieldValues.complement
        ? ""
        : "Esse campo é obrigatório.";
    if ("neighborhood" in fieldValues)
      temp.neighborhood = fieldValues.neighborhood
        ? ""
        : "Esse campo é obrigatório.";
    if ("city" in fieldValues)
      temp.city = fieldValues.city ? "" : "Esse campo é obrigatório.";
    if ("state" in fieldValues)
      temp.state = fieldValues.state ? "" : "Esse campo é obrigatório.";
    if ("country" in fieldValues)
      temp.country = fieldValues.country ? "" : "Esse campo é obrigatório.";
    if ("zipCode" in fieldValues)
      temp.zipCode = fieldValues.zipCode ? "" : "Esse campo é obrigatório.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  useEffect(() => {
    if (recordForEdit != null) addrrssFormat();
  }, [recordForEdit]);

  function addrrssFormat() {
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit,
        street: recordForEdit.address.split(",")[0] || "",
        number: recordForEdit.address.split(",")[1] || "",
        neighborhood: recordForEdit.address.split(",")[2] || "",
        complement: recordForEdit.address.split(",")[3] || "",
        zipCode: recordForEdit.address.split(",")[4] || "",
        city: recordForEdit.address.split(",")[5] || "",
        state: recordForEdit.address.split(",")[6] || "",
        country: recordForEdit.address.split(",")[7] || "",
        reference: recordForEdit.address.split(",")[8] || ""
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Input
            name="name"
            label="Nome"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Input
            name="phone"
            label="Telefone"
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <Input
            name="cpf"
            label="CPF"
            value={values.cpf}
            onChange={handleInputChange}
            error={errors.cpf}
          />
          <Input
            name="street"
            label="Rua"
            value={values.street}
            onChange={handleInputChange}
            error={errors.street}
          />
          <Input
            name="number"
            label="Número"
            value={values.number}
            onChange={handleInputChange}
            error={errors.number}
          />
          <Input
            name="complement"
            label="Complemento"
            value={values.complement}
            onChange={handleInputChange}
            error={errors.complement}
          />
          <Input
            name="neighborhood"
            label="Bairro"
            value={values.neighborhood}
            onChange={handleInputChange}
            error={errors.neighborhood}
          />
          <Input
            name="city"
            label="Cidade"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
          <Input
            name="state"
            label="Estado"
            value={values.state}
            onChange={handleInputChange}
            error={errors.state}
          />
          <Input
            name="country"
            label="País"
            value={values.country}
            onChange={handleInputChange}
            error={errors.country}
          />
          <Input
            name="zipCode"
            label="CEP"
            value={values.zipCode}
            onChange={handleInputChange}
            error={errors.zipCode}
          />
          <Input
            name="reference"
            label="Ponto de referencia"
            value={values.reference}
            onChange={handleInputChange}
            error={errors.reference}
          />
        </Grid>
        <Grid item xs={12}>
          <div>
            <Button type="submit" text="Salvar" />
            <Button text="Limpar" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CustomerForm;
