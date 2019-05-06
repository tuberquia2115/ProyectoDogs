import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classs from "./style.module.css";
import TarjetaDescriptionsDosg from '../TarjetaDescriptionsDogs/TarjetaDescriptionsDogs'
export default class CardsDogs extends Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    onChanged: PropTypes.object
  };
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        {this.props.img.map((value, key) => {
          return (
            <Link to="/detail">
              <div key={key} className={classs.card}>
                <img src={value} alt="Dogs" />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
