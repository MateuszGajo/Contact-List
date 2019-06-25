import React from "react";
import "./singleContact.css";
import { Link } from "react-router-dom";

const SingleContact = () => {
  return (
    <div className="contact-wrapper">
      <Link to="/posts/sadas">
        <div className="contact">
          <div className="image">
            <img src="./assets/user.png" alt="jedzenie" />
          </div>
          <div className="personal-info">
            <p>Imię nazwisko</p>
            <p>nr telefonu</p>
          </div>
        </div>
      </Link>
      <div className="contact">
        <div className="image">
          <img src="./assets/user.png" alt="jedzenie" />
        </div>
        <div className="personal-info">
          <p>Imię nazwisko</p>
          <p>nr telefonu</p>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
