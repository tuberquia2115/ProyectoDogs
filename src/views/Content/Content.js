import React, { Component } from "react";
import PropTypes from "prop-types";
import './style.css';
 class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        {this.props.body}
      </div>
    );
  }
}
 
export default Content;