import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classs from './style.module.css';
import * as logo from '../../assets/logo.png';
export default class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    render() {
        const { items } = this.props;
        const { Header } = Layout;
        return (
            <Header className="ant-list-header" style={{padding:"0"}}>
                <Layout>
                    <div className={classs.containers}>
                        <Menu mode="horizontal" theme="dark" className={classs.subcontainer}>
                            {items ?
                                items.map((item, key) => (
                                    <Menu.Item key={key}>
                                        <Link to={item.url}>{item.title}</Link>
                                    </Menu.Item>
                                )) : null}
                        </Menu>
                        <div className={classs.Applogo}>
                            <img alt="logo" src={logo} />
                        </div>
                    </div>
                </Layout>
            </Header>
        );
    }
}
