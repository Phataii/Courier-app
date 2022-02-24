import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/index";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Shipments from "./components/shipments/Shipments";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Index />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/shipment">
              <Shipments />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
