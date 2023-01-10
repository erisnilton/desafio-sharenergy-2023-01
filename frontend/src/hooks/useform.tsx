import React, { useState } from "react";

export interface ValuesFormProps {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  reference: string;
}

export function useForm(
  initialFValues: ValuesFormProps,
  validateOnChange = false,
  validate: any
) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({} as ValuesFormProps);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
