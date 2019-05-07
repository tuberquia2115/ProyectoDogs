/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classs from "./style.module.css";
import TarjetaDescriptionsDogs from "../TarjetaDescriptionsDogs/TarjetaDescriptionsDogs";
export default class CardsDogs extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChanged: PropTypes.object,
    id: PropTypes.any
  };
  render() {
    const { className, img, id} = this.props;
    return (
      <div className={className}>
        {img ? img.map((value, key) => {    
          return ( 
            <Link to="/detail" id={id}> 
              <div key={key} className={classs.card}> 
                <img src={value} alt="Dogs" />
              </div>
            </Link>
          );
        }): null}
      </div>
    );
  }
}
