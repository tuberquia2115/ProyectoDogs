import React, { Component } from "react";
import {Button } from 'antd'
import classs from "./style.module.css";
export default class Paginations extends Component {
  render() {
    const { idImg, onClick } = this.props;
    return (
      <div className={classs.container}>
        {idImg
          ? idImg.map((value, key) => {
              return (
                <div className={classs.containerButton}>
                <Button className={classs.Button} value={key} onClick={onClick} key={key}>
                  {key}
                </Button>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
