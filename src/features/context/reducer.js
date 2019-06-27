const addContact = (newContact, state) => {
  newContact.id = state.contacts.length + 1;
  const newContacts = [...state.contacts, newContact];
  return { ...state, contacts: newContacts };
};
const removeContact = (contactId, state) => {
  const newContacts = state.contacts.filter(
    contact => contact.id !== contactId
  );
  newContacts.map((item, index) => (item.id = index + 1));
  return { ...state, contacts: newContacts };
};
const editContact = (editContact, state) => {
  let editContacts = state.contacts;
  editContacts[editContact.id - 1] = { ...editContact };
  return { ...state, contacts: editContacts };
};

export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COTACT":
      return addContact(action.contact, state);
    case "REMOVE_COTACT":
      return removeContact(action.contact, state);

    case "EDIT_CONTACT":
      return editContact(action.contact, state);
    default:
      console.log("brak danego polecenia");
  }
};
