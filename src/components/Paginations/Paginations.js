import React from "react";
import { Button } from 'antd'
import PropTypes from 'prop-types';
import classs from "./style.module.css";
const Paginations = (props) => {
  const { idImg, onClick } = props;
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
  )
}

export default Paginations;
Paginations.propTypes = {
  idImg: PropTypes.object,
  onClick: PropTypes.object

}
