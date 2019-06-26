export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COTACT":
      console.log("add contact");
      break;
    case "REMOVE_COTACT":
      console.log("remove contact");
      break;
    default:
      console.log("brak danego polecenia");
  }
};
