import React, { Component } from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types';
import classs from './style.module.css';
export default class CardsDogs extends Component {

  static propTypes = {
    className: PropTypes.string.isRequired,
    onChanged: PropTypes.object
  }
  render() {
    const { className, onClick } = this.props;
    return (
      <div className={className} >
        {this.props.img.map((value, key) => {
          return (
            <div  key ={key}className={classs.card} onClick={onClick}>
              <img src={value} className={classs.img} alt="Dogs" />
            </div>
          )

        })}

      </div>)
  }
}