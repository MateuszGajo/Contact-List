import React, { useState, useReducer } from "react";
import { contactContext } from "./contactContext";
import { contactReducer } from "./reducer";

const GlobalState = props => {
  // const [contacts, setContacts] = useState();
  const [contactState, dispatch] = useReducer(contactReducer, {
    contacts: [
      {
        id: 1,
        firstName: "David",
        lastName: "BackHam",
        phoneNumber: "434321132",
        address: "21 street"
      },
      {
        id: 2,
        firstName: "Dawid",
        lastName: "Mc",
        phoneNumber: "121213432",
        address: "23 street"
      },
      {
        id: 3,
        firstName: "Konrad",
        lastName: "Cielisty",
        phoneNumber: "511342211",
        address: "Lubelska"
      },
      {
        id: 4,
        firstName: "Jakub",
        lastName: "Władacz",
        phoneNumber: "632121534",
        address: "Włodyjowska"
      }
    ]
  });
  const addContact = newContact => {
    dispatch({ type: "ADD_COTACT", contact: newContact });
  };
  const removeContact = contact => {
    dispatch({ type: "REMOVE_COTACT", contact: contact });
  };
  const editContact = editContact => {
    dispatch({ type: "EDIT_CONTACT", contact: editContact });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: contactState.contacts,
        addContact: addContact,
        removeContact: removeContact,
        editContact: editContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default GlobalState;
