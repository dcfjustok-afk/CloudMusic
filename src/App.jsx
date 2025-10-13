import { useState } from 'react'
import './App.css'
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const label = ['发现音乐','我的音乐','关注','商城','音乐人']
const pathMap = ["/", "/myMusic", "/follow", "/shop", "/musician"];

const items = label.map((label, index) => ({
  key: pathMap[index],
  label: <Link to={pathMap[index]}>{label}</Link>,
}));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      
       <Content style={{ padding: '24px 48px', background: colorBgContainer }}>
        {/* 这里渲染路由内容 */}
        <Outlet />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App
