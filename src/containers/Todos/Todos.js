import React, { Component } from "react";
import  classs from "./style.module.css";
import ListDogs from "../../components/ListDogs/ListDogs";
export default class List extends Component {
  render() {

    return (
      <div  className={classs.container}>
        <ListDogs />
      </div>
    )
  }
}
