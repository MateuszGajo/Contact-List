import React, { useState } from "react";
import { contactContext } from "./contactContext";

const GlobalState = props => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "David",
      lastName: "BackHam",
      phoneNumber: "434321132",
      Address: "21 street"
    },
    {
      id: 2,
      firstName: "Dawid",
      lastName: "Mc",
      phoneNumber: "121213432",
      Address: "23 street"
    },
    {
      id: 3,
      firstName: "Konrad",
      lastName: "Cielisty",
      phoneNumber: "511342211",
      Address: "Lubelska"
    },
    {
      id: 4,
      firstName: "Jakub",
      lastName: "Władacz",
      phoneNumber: "632121534",
      Address: "Włodyjowska"
    }
  ]);
  const addContact = newContact => {
    newContact.id = contacts.length + 1;
    const updatedContact = [...contacts, newContact];
    setContacts(updatedContact);
  };
  const removeContact = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    newContacts.map((item, index) => (item.id = index + 1));
    setContacts(newContacts);
  };

  return (
    <contactContext.Provider
      value={{
        contacts: contacts,
        addContact: addContact,
        removeContact: removeContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default GlobalState;
