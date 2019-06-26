import React from "react";
import { Link } from "react-router-dom";
import "./singleContact.css";
import { contactContext } from "../../../context/contactContext";

const SingleContact = () => {
  return (
    <contactContext.Consumer>
      {context => (
        <div className="contact-wrapper">
          {console.log(context)}
          {context.contacts.map(item => (
            <Link to={`/posts/${item.id}`} key={item.id}>
              <div className="contact">
                <div className="image">
                  <img src="./assets/user.png" alt="jedzenie" />
                </div>
                <div className="personal-info">
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </contactContext.Consumer>
  );
};

export default SingleContact;
