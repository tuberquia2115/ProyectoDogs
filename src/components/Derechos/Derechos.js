/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import classs from "./style.module.css";
export default class Derechos extends Component {
  render() {
    return (
      <div className={classs.footer}>
        <h3>
          nombre: <p>Jose Manuel Graciano tuberquia</p>
        </h3>
        <h3>
          Correo: <p>tuberquia2115@gmail.com</p>
        </h3>
        <h3>Cuenta de github: </h3>
        <a href="https://github.com/tuberquia2115/ProyectoDogs">
          https://github.com/tuberquia2115/ProyectoDogs
        </a>
      </div>
    );
  }
}