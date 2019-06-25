import React from "react";
import "./createContact.css";

const CreateContact = () => {
  return (
    <form className="create-contact">
      <h3>Dodaj nowy kontakt</h3>
      <div className="input-field">
        <input type="text" placeholder="Imię" />
      </div>
      <div className="input-field">
        <input type="text" placeholder="Nazwisko" />
      </div>
      <div className="input-field">
        <input type="text" placeholder="Numer telefonu" />
      </div>
      <div className="input-field">
        <input type="text" placeholder="Adres" />
      </div>
      <div className="input-field">
        <button>Dodaj</button>
      </div>
    </form>
  );
};

export default CreateContact;
