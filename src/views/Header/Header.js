import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classs from './style.module.css';
import * as logo from '../../assets/logo.png';

const Header = (props) => {
    const { items } = props;
    const { Header } = Layout;
    return (
        <Header className="ant-list-header" style={{ padding: "0" }}>
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
    )
}
export default Header;
Header.propTypes = {
    items: PropTypes.array.isRequired
}

