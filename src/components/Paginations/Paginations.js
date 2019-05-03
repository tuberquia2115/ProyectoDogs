import React, { Component } from 'react'
import classs from './style.module.css'
export default class Paginations extends Component {
    render() {
        const { idImg, onClick } = this.props;
        return (
            <div className={classs.containerButton}>
            {idImg ? idImg.map((value, key)=>{
                return(
                    <div className={classs.Button}>
                        <button value={key} onClick={onClick} key={key}>{key}</button>
                    </div>
                )
            }) : null}
            </div>
        )
    }
}
