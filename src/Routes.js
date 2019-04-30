import React from "react";
import { Route, Switch} from "react-router-dom";

import App from "./views/App/App";
import Home from "./containers/Home/Home";
import DogsList from "./containers/List/List";
import page404 from "./components/Page404/Page404";

const AppRoutes = () => 
  <App>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/todos" component={DogsList} />
      <Route component={page404} />
    </Switch>
  </App>;

export default AppRoutes;
