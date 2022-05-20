import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages"; // import from ./pages/index.js by default
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact={true}>
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
