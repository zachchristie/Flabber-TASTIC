import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
            <Route exact path="/" render={props => <Books {...props} day="Wednesday" />} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
        </Switch>

      </>
    </Router>
  );
}

export default App;
