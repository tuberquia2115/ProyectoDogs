/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classs from "./style.module.css";
export default class CardsDogs extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChanged: PropTypes.object,
    id: PropTypes.any
  };
  render() {
    const { className, img} = this.props;
   
    return (
    
      <div className={className}>
        {img ? img.map((value, key) => {    
          return ( 
            <Link to={{ pathname: '/detail/',state: {img: value}}}> 
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
