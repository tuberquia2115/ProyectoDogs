import React from "react";
import items from "./../../constants/routes/Menu/Menu";
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from 'prop-types';
const App = (props) => {
  return (
    <div className="App" >
      <Header
        items={items}
      />
      {props.children}
      <Footer />
    </div>
  )
}

export default App;
App.propTypes = {
  children: PropTypes.object.isRequired
};