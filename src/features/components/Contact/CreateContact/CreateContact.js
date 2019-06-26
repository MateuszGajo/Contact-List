import React, { useContext, useState } from "react";
import "./createContact.css";
import { contactContext } from "../../../context/contactContext";

const CreateContact = props => {
  const context = useContext(contactContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, address } = values;
    if (!firstName) return setErrors({ firstNameError: "wpisz imię" });
    else if (!lastName) return setErrors({ lastNameError: "wpisz nazwisko" });
    else if (!phoneNumber)
      return setErrors({ phoneNumberError: "Wpisz numer telefonu" });
    else if (isNaN(Number(phoneNumber)))
      return setErrors({
        phoneNumberError: "Numer Telefon nie może zawierać liter"
      });
    else if (!address) return setErrors({ addressError: "Wpisz adres" });
    context.addContact({ ...values });
    props.history.push("/");
  };
  return (
    <form className="create-contact" onSubmit={handleSubmit}>
      <h3>Dodaj nowy kontakt</h3>
      <div className="input-field">
        <input
          type="text"
          placeholder="Imię"
          name="firstName"
          onChange={handleChange}
        />
        {errors.firstNameError ? errors.firstNameError : null}
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Nazwisko"
          name="lastName"
          onChange={handleChange}
        />
        {errors.lastNameError ? errors.lastNameError : null}
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Numer telefonu"
          name="phoneNumber"
          onChange={handleChange}
        />
        {errors.phoneNumberError ? errors.phoneNumberError : null}
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Adres"
          name="address"
          onChange={handleChange}
        />
        {errors.addressError ? errors.addressError : null}
      </div>
      <div className="input-field">
        <button>Dodaj</button>
      </div>
    </form>
  );
};

export default CreateContact;
