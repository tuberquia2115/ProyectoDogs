import React, { Component } from "react";
import classs from "./style.module.css";
import PropTypes from "prop-types";

class TarjetaDescriptionsDogs extends Component {
  render() {
    const { imgUrl, children } = this.props;
    return (
      <section className={classs.container}> 
        <div className={classs.containerImgDogs}>
          <img className={classs.containerImg} alt="Dogs" src={imgUrl} />
        </div>
        <div className={classs.containerChildren}>
        <p className={classs.childrend}>{children}</p>
        </div>
      </section>
    );
  }
}
TarjetaDescriptionsDogs.propTypes = {
  imgUrl: PropTypes.array.isRequired,
  children: PropTypes.string.isRequired
};
export default TarjetaDescriptionsDogs;
