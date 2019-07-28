import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import firebaseConfig from './Config/firebase/config';
import firebase from 'firebase';

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
firebase.initializeApp(firebaseConfig);
