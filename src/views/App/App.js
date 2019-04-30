import React from "react";
import items from "./../../constants/routes/Menu/Menu";
import './App.css';
import Header from "./../../containers/Header/Header";
import Footer from "./../../containers/Footer/Footer";
import PropTypes from 'prop-types';
import Content from '../Content/Content';
class App extends React.Component {
   static propTypes={
    children: PropTypes.object.isRequired
  };
  render() {  
    return (
      <div className="App" >
        <Header 
        items={items}
        /> 
        <Content body={this.props.children}  />
        <Footer/>
      </div>
    );
  }
}
export default App;