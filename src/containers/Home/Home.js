import React, { Component } from "react";
import CardsdescriptionsTitle from "../../components/CardsDescriptionsTitle/CardsdescriptionsTitle";
import CardsDogs from "../../components/CardsDogs/CardsDogs";
import Url from "../../constants/Urlapi/Apiurl";
import classs from "./style.module.css";
import VerMas from "../../components/Vermas/Vermas.js";

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      list: [],
      listImg: [],
      ramdomImg: []
    };
  }
  getData() {
    fetch(Url.urlRandom)
      .then(res => res.json())
      .then(res => {
        this.setState({ ramdomImg: res.message });
      });

    fetch(Url.urlImg)
      .then(res => res.json())
      .then(res => {
        this.setState({ listImg: res.message });
      });

    fetch(Url.urlList)
      .then(res => res.json())
      .then(res => {
        this.setState({ list: res.message });
      });
  }
  componentDidMount() {
    this.getData();
  }

  

  render() {
    return (
      <div className={classs.containerMenu}>
        <div className={classs.containersCardsdescriptions}>
          <CardsdescriptionsTitle >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </CardsdescriptionsTitle>
        </div>
        <div style={{ margin: "auto" }}>
          <CardsDogs
            className={classs.containercardsdogs}
            img={this.state.ramdomImg}
          />
        </div>
      </div>
    );
  }
}
