import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./contactDetails.css";
import { contactContext } from "../../../context/contactContext";

const ContactDetail = props => {
  const context = useContext(contactContext);
  const [singleContact, setSingleContact] = useState({});
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    props.history.push(`/posts/${counter}`);
    const contact = context.contacts.find(item => item.id == counter);
    setSingleContact(contact);
    console.log(contact);
  }, [counter]);
  return (
    <div className="detail-wrapper">
      <div className="view">
        <Link to="/">
          <i className="fas fa-th" title="Zmień widok" />
        </Link>
      </div>
      <div className="navbar">
        <i
          className="fas fa-chevron-left"
          onClick={() => {
            if (counter === 1) setCounter(context.contacts.length);
            else setCounter(counter - 1);
          }}
        />
        <img src="../assets/user.png" alt="" />
        <i
          className="fas fa-chevron-right"
          onClick={() => {
            if (counter === context.contacts.length) setCounter(1);
            else setCounter(counter + 1);
          }}
        />
      </div>
      <div className="info">
        <div className="names">
          <p>{singleContact.firstName} </p>
          <p>{singleContact.lastName}</p>
        </div>
        <div className="contact-data">
          <p>{singleContact.phoneNumber}</p>
          <p>{singleContact.Address}</p>
        </div>
      </div>
      <div className="action">
        <i
          className="fas fa-trash"
          onClick={() => {
            context.removeContact(singleContact.id);
            props.history.push("/");
          }}
        />
        <i className="fas fa-user-edit" />
      </div>
    </div>
  );
};

export default ContactDetail;
