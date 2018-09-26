import React, { Component } from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Summary from "./Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          {/* <Switch> */}
          <div>
            <Route exact path="/" render={props => <Homepage {...props} />} />
            <Route path="/contacts" render={props => <Summary {...props} />} />
          </div>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
