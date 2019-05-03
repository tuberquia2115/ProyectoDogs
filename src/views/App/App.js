import React from "react";
import items from "./../../constants/routes/Menu/Menu";
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from 'prop-types';
class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className="App" >
        <Header
          items={items}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default App;