import React, { Component } from "react";
import { Row, Col } from "antd";
import { Pagination } from 'antd'
import url from "../../constants/Urlapi/Apiurl";
import CardsDogs from "../CardsDogs/CardsDogs";
import classs from './style.module.css'
export default class ListDogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisImg: [],
      currentPage: 1,
      todosPerPage: 50
    };
  }
  componentWillMount() {
    fetch(url.urlImg)
      .then(res => res.json())
      .then(res => {
        this.setState({ lisImg: res.message })
        console.log("esta es la data que llega de imagenes", res)
      });
  }
   handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
   });
 }
  hadlerOnChanged(){
    console.log("jose")
  }


  render() {
    const { lisImg, currentPage, todosPerPage } = this.state;

     const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
     const currentTodos = lisImg.slice([indexOfFirstTodo,indexOfLastTodo]);

     const renderTodos = currentTodos.map((index, value) => {
      return <CardsDogs img={value} key={index} onChanged={this.hadlerOnChanged()}/>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(lisImg.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
        key={number}
        id={number}
        onClick={this.hadlerOnChanged()}
      >
        {number}
      </li>
       
      );
    });
    return (
      <div style={{ padding: "5rem" }}>
        <div>
          {renderTodos}
        </div>
        <div>
          {renderPageNumbers}
        </div>
      </div>
    );
  }
}
