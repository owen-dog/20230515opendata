import './admin.css'

import { Redirect, Link, Switch, Route , withRouter} from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, useLocation } from 'antd';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo192.png';
import MHeader from '../../components/HeadNav/index';
import LeftNav from './../../components/LeftNav/index';

import Servicemenu from '../ServiceMenu/servicemenu';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/memoryUtils';
import Rain from '../Map/rain';
import Drug from '../Map/drug';
import Earthquake from '../Map/earthquake';
import Crime from '../Map/crime';
import Comercial from './edit_commercial';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const user = storageUtils.getUser();
  //若内存中存了用户名，则已登录，否则跳转至登录界面
  // 前后跑通再取消注释是

  // if (!((!user.username)^(!user.email))) {
  //   return <Redirect to='/login' />
  // }

  return (

    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
     <LeftNav></LeftNav>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <MHeader></MHeader>

        <Content
          style={{
            margin: '0 0px',
          }}
        >
          <Switch>
            <Route path='/detail' component={Servicemenu}></Route>  
            <Route path='/rain' component={Rain}></Route>  
            <Route path='/drug' component={Drug}></Route> 
            <Route path='/earthquake' component={Earthquake}></Route> 
            <Route path='/crime' component={Crime}></Route>   
            <Route path='/comercial' component={Comercial}></Route>    
 

          </Switch>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ZHW designed ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

