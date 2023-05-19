import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { Layout, Button, Modal, Badge } from "antd";
import menuList from '../../config/menuConfig';
import {
  NotificationOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import './index.css'
// 通过connect高级组件 对普通组件进行包装


const { Header } = Layout;
const { confirm } = Modal;


class MHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:5
    }
  }
  getTitle = () => {
    // 获取动态的标题
    let title = '';
    // 根据当前请求的path得到对应的title
    const path = this.props.location.pathname;
    console.log(path);
    menuList.forEach(item => {
      if (item.key === path) {
        title = item.title;
      } 
    })
    return title;

  }
  load = () => {
    this.state.num = 5
  }
  componentDidMount(){
    this.load()
  }

  render() {
   
    const { num } = this.state;
    // const user = this.props.user;
 
    console.log(this.props);
    return (

        <div className="header">
          <h2 className='header-title'>{this.getTitle()}</h2>
          <div className="header-user">

           
          </div>
        </div>

    )
  }
}
export default withRouter(MHeader);
