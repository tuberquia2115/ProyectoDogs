import React from "react";
import PropTypes from 'prop-types';
import classs from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Cards = (props) => {
  return (
    <section className={classs.sections}>
      <h1 className={classs.typeTitle}>!!Es hora de Adoptar un perro!!!</h1>
      <p className={classs.childrend}>{props.children}</p>
      <Link to="/information">
        <Button
          type="primary"
          className={classs.button}
          onClick={props.onClickb}
        >
          Ver más{" "}
        </Button>
      </Link>
    </section>
  )
}

export default Cards;
Cards.propType = {
  children: PropTypes.string,
  onClickb: PropTypes.object

}
