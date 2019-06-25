import React from "react";
import SingleContact from "../Contact/SingleContact/SingleContact";
import { Link } from "react-router-dom";
import "./home.css";

const Home = props => {
  return (
    <div className="home-wrapper">
      <div className="brand">
        <h2>Lista Kontaktów</h2>
      </div>
      <div className="container">
        <div className="view">
          <Link to="/posts/1">
            <i className="fas fa-th" title="Zmień widok" />
          </Link>
        </div>
        <SingleContact />
        <div className="add-contact">
          <div
            className="box-contact"
            onClick={() => {
              props.history.push("/addcontact");
            }}
          >
            <i className="fas fa-user-plus" />
            <p>Dodaj nowy kontakt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
