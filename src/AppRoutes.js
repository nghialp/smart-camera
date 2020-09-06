import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

// import { Routers } from "./routers";
import HomePage from "./pages/HomePage";
import SmartCamera from "./pages/SmartCamera";
import Introduce from "./pages/Introduce";

export function AppRoutes() {
  return (
    <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/camera">
            <SmartCamera />
          </Route>
          <Route path="/introduce">
            <Introduce />
          </Route>
        </Switch>
  )
}