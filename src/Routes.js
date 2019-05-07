import React from "react";
import { Route, Switch} from "react-router-dom";
import App from "./views/App/App";
import Home from "./containers/Home/Home";
import DogsList from "./containers/Todos/Todos";
import page404 from "./containers/Page404/Page404";
import Detail from "./containers/Detail/Detail";
import Vermas from './components/Vermas/Vermas';

const AppRoutes = () => 
  <App>
    <Switch>
      <Route path="/detail" component={Detail}></Route>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={DogsList} />
      <Route exact path="/information" component={Vermas}></Route>
      <Route exact component={page404} />
    </Switch>
  </App>;

export default AppRoutes;
