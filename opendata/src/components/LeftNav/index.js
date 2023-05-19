import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    HistoryOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import Logo from '../../assets/images/logo192.png';
import { Breadcrumb, Layout, Menu, } from 'antd';
import './index.css'
import menuConfig from '../../config/menuConfig'


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

class LeftNav extends Component {


    //将侧边栏封装到index.js中
    render() {
        console.log(this.props);
        let defaultkey = this.props.location.pathname;
        console.log(defaultkey);

        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    <Link className='left-nav-link' to='/home'>
                        <img src={Logo} alt="" />
                        <h1>Secure map</h1>
                    </Link>
                </div>

                <Menu
                    theme="dark"
                    defaultSelectedKeys={defaultkey}
                    mode="inline"
                    defaultOpenKeys='sub1'
                >
                    <Menu.Item key="/detail">
                        <DesktopOutlined />
                        <a href='/detail'></a>
                        HOME
                    </Menu.Item>
                    <Menu.SubMenu key="1" title={<span>Map</span>}>
                        <Menu.Item key="/rain">
                            <a href='/rain'>
                                RainFall
                            </a>
                        </Menu.Item>
                        <Menu.Item key="/drug">
                            <a href='/drug'>
                                Drug issue
                            </a>
                        </Menu.Item>

                        <Menu.Item key="/earthquake">
                            <a href='/earthquake'>
                                Earthquake
                            </a>
                        </Menu.Item>
                        <Menu.Item key="/crime">
                            <a href='/crime'>
                                crime
                            </a>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="/comercial">
                        <DesktopOutlined />
                        <a href='/comercial'></a>
                        Add commercial
                    </Menu.Item>


                </Menu>
            </Sider>

        )
    }
}
export default withRouter(LeftNav);