import React, { Component } from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types';
import './style.css';
export default class CardsDogs extends Component {

  static propTypes = {
    className: PropTypes.string.isRequired,
    onChanged: PropTypes.object
  }
  render() {
    const { className } = this.props;
    const { Meta } = Card;
    return (
      <div className={className} >
        {this.props.img.map((value, key) => {
          return (
            <Card className="card" hoverable key={key} onChange={this.props.onChanged}
              cover={<img src={value} alt="Dogs" />} >
              <hr />
              <Meta className="meta" title="perro" />
            </Card>
          )

        })}

      </div>)
  }
}