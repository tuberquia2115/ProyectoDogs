import React, { Component } from "react";
import TarjetaDescriptionsDogs from "../../components/TarjetaDescriptionsDogs/TarjetaDescriptionsDogs";
import classs from "./style.module.css";

export default class Detail extends Component {

  render() {
console.log(this.props);
    const id = this.props.location.state.img
    console.log(id)
    return (   
        <div className={classs.containersDogsdescriptions}>
          <TarjetaDescriptionsDogs imgUrl={id}/>  
        </div>
    
    );
  }
}
