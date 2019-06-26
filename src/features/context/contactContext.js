import React, { createContext } from "react";

export const contactContext = createContext({
  contacts: [
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
      firstName: "Dawid",
      lastName: "Mc",
      phoneNumber: "121213432",
      Address: "23 street"
    },
    {
      id: 4,
      firstName: "Dawid",
      lastName: "Mc",
      phoneNumber: "121213432",
      Address: "23 street"
    }
  ]
});
