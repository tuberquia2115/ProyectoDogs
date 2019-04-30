import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
// Routes
import AppRoutes from "./Routes";
import { BrowserRouter as Router  } from "react-router-dom";
render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
