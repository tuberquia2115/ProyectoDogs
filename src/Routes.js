import React from "react";
import { Route, Switch} from "react-router-dom";
import App from "./views/App/App";
import Home from "./containers/Home/Home";
import DogsList from "./containers/List/List";
import page404 from "./components/Page404/Page404";
import CardsDescriptionsDogs from "./components/CardsDescriptionsDogs/CardsDescriptionsDogs";

const AppRoutes = () => 
  <App>
    <Switch>
      <Route exact path="/datail" component={CardsDescriptionsDogs}></Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/todos" component={DogsList} />
      <Route exact component={page404} />
    </Switch>
  </App>;

export default AppRoutes;
