import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./features/components/MainPage/Home";
import CreateContact from "./features/components/Contact/CreateContact/CreateContact";
import ContactDetail from "./features/components/Contact/ContactDetail/ContactDetail";
import GlobalState from "./features/context/GlobalState";
import EditContact from "./features/components/Contact/EditContact/EditContact";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addcontact" component={CreateContact} />
            <Route path="/posts/:id" component={ContactDetail} />
            <Route path="/edit/:id" component={EditContact} />
          </Switch>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
