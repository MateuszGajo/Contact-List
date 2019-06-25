import React from "react";
import { Link } from "react-router-dom";
import "./contactDetails.css";

const ContactDetail = () => {
  return (
    <div className="detail-wrapper">
      <div className="view">
        <Link to="/">
          <i className="fas fa-th" title="Zmień widok" />
        </Link>
      </div>
      <div className="navbar">
        <i className="fas fa-chevron-left" />
        <img src="../assets/user.png" alt="" />
        <i className="fas fa-chevron-right" />
      </div>
      <div className="info">
        <div className="names">
          <p>Imię </p>
          <p>Nazwisko</p>
        </div>
        <div className="contact-data">
          <p>Number Telefonu</p>
          <p>Adres zamieszkania</p>
        </div>
      </div>
      <div className="action">
        <i className="fas fa-trash" />
        <i className="fas fa-user-edit" />
      </div>
    </div>
  );
};

export default ContactDetail;
