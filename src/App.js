import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./features/components/MainPage/Home";
import CreateContact from "./features/components/Contact/CreateContact/CreateContact";
import ContactDetail from "./features/components/Contact/ContactDetail/ContactDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/addcontact" component={CreateContact} />
        <Route path="/posts/:id" component={ContactDetail} />
      </div>
    </Router>
  );
}

export default App;
