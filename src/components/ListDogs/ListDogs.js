import React, { Component } from "react";
import { Spin} from "antd";
import url from "../../constants/Urlapi/Apiurl";
import CardsDogs from "../CardsDogs/CardsDogs";
import classs from "./style.module.css";
import Paginations from "../Paginations/Paginations";
export default class ListDogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisImg: [],
      indexImg: 1,
      loading: false
    };
  }
  getData() {
    this.setState({
      lisImg: [],
      loading: true
    });
    fetch(url.urlImg)
      .then(json => json.json())
      .then(json => {
        console.log(" las dataaaa", json.message);
        this.setState({
          lisImg: json.message,
          loading: false
        });
      })
      .catch(e => {
        console.error(e);
        this.setState({
          lisImg: [],
          loading: false
        });
      });
  }

  btnClick = e => {
    const idImg = e.target.value;
    this.setState({
      idImg
    });
    this.getData();
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.loading) {
      return <Spin size="large" tip="Loading..." className={classs.spiner} />;
    }
    return (
      <div className={classs.containerCards}>
        <CardsDogs img={this.state.lisImg} onClick={this.hadlerClick} />
        <Paginations idImg={this.state.lisImg} onClick={this.btnClick} />
      </div>
    );
  }
}
