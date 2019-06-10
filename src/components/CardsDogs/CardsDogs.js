/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classs from "./style.module.css";

const CardsDogs = (props) => {
  const { className, img } = props;
  return (
    <div className={className}>
      {img ? img.map((value, key) => {
        return (
          <Link to={{ pathname: '/detail/', state: { img: value } }}>
            <div key={key} className={classs.card}>
              <img src={value} alt="Dogs" />
            </div>
          </Link>
        );
      }) : null}
    </div>
  )
}

export default CardsDogs;
CardsDogs.propTypes = {
  className: PropTypes.string,
};
