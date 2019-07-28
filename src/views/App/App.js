import React from "react";
import items from "./../../constants/routes/Menu/Menu";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../../views/Auth/Login/Login";
import PropTypes from "prop-types";
const App = props => {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header items={items} />
      {props.children}
      <Footer />
    </div>
  );
};

export default App;
App.propTypes = {
  children: PropTypes.object.isRequired
};
