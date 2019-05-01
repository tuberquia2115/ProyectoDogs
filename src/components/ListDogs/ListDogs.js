import React, { Component } from "react";
import { Row, Col } from "antd";
import url from "../../constants/Urlapi/Apiurl";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisImg: [],
      currentPage: 1,
      todosPerPage: 10
    };
  }
  componentWillMount() {
    fetch(url.urlImg)
      .then(res => res.json())
      .then(res => {
        this.state.lisImg({ lisImg: res });
      });
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { lisImg, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = lisImg.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <img alt="dogs" key={index}>{todo}</img>;
      });

      const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(lisImg.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <Row style={{ backgroundColor: "red" }} />
      </div>
    );
  }
}
