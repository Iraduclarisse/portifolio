import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import clarisse from "../assets/imagess/clarisse.jpg";
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FileOutlined,
  HomeOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined


} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width="350px" style={{minHeight:"100vh"}}>
          { <img src={clarisse} alt="logo" className="logo"/>}
          <h1 className="name"> Iradukunda clarisse</h1>
          <div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
          <GithubOutlined className="socialIcons" />
          <LinkedinOutlined className="socialIcons" />
          <InstagramOutlined className="socialIcons" />
          <TwitterOutlined className="socialIcons" />

          </Menu>

          </div>
          <div className="icons">
          
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item  key="1" icon={<HomeOutlined className="home"/>}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined className="home"/>}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined className="home"/>}>
              Resume
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined className="home"/>}>
              Portofolio
              </Menu.Item>
            
              <Menu.Item key="5" icon={<FileOutlined className="home" />}>
              Services
              </Menu.Item>
          </Menu>
          </div>

          <div className="text">© Copyright<div className="text5">iPortfolio</div > <div className="text6">Designed by</div>  <div className="text2"> SheCanCode</div> </div>
          
             
        </Sider>
        <Layout className="site-layout">
          {/*<Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>*/}
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 3px',
              padding: 0,
              minHeight: "100vh",
            // background:'chocolate', 
                       }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;