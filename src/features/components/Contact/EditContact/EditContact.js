import React, { useContext, useState, useEffect } from "react";
import "./editContact.css";
import { contactContext } from "../../../context/contactContext";

const EditContact = props => {
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
    context.editContact({ ...values });
    props.history.push("/");
  };
  useEffect(() => {
    const selectContact = context.contacts.find(
      item => item.id == props.match.params.id
    );
    setValues({ ...selectContact });
  }, []);
  return (
    <React.Fragment>
      <div className="back">
        <p onClick={() => props.history.push("/")}>Powrót do strony głównej</p>
      </div>
      <form className="create-contact" onSubmit={handleSubmit}>
        <h3>Edytuj kontakt</h3>
        <div className="input-field">
          <input
            type="text"
            placeholder="Imię"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
          {errors.firstNameError ? errors.firstNameError : null}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nazwisko"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
          {errors.lastNameError ? errors.lastNameError : null}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Numer telefonu"
            name="phoneNumber"
            onChange={handleChange}
            value={values.phoneNumber}
          />
          {errors.phoneNumberError ? errors.phoneNumberError : null}
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Adres"
            name="address"
            onChange={handleChange}
            value={values.address}
          />
          {errors.addressError ? errors.addressError : null}
        </div>
        <div className="input-field">
          <button>Zapisz</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EditContact;
