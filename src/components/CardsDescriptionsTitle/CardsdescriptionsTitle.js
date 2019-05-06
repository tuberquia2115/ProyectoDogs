import React, { Component } from "react";
import classs from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default class Cards extends Component {
  render() {
    return (
      <section className={classs.sections}>
        <h1 className={classs.typeTitle}>!!Es hora de Adoptar un perro!!!</h1>
        <p className={classs.childrend}>{this.props.children}</p>
        <Link to="/information">
          <Button
            type="primary"
            className={classs.button}
            onClick={this.props.onClickb}
          >
            Ver más{" "}
          </Button>
        </Link>
      </section>
    );
  }
}
