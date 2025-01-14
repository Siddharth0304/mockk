"use client";
import Link from 'next/link';
import {DesktopOutlined,FileOutlined,DashboardOutlined,PlayCircleOutlined,ReconciliationOutlined,CalendarOutlined,TagsOutlined,LogoutOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import Login from './Login';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, href) {
  return {
    key,
    icon,
    label: href ? (<Link href={href}>{label}</Link>):(label)
  };
}
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  backgroundColor:'#fffaec',
  padding: '0',
  margin: '0',
  border:''  
};
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />,'/dashboard'),
  getItem('Device', '2', <DesktopOutlined />,'/device'),
  getItem('Media', '3', <PlayCircleOutlined />,'/media'),
  getItem('Playlists', '4', <FileOutlined />,'/playlist'),
  getItem('Policy', '5', <ReconciliationOutlined />,'/policy'),
  getItem('Schedules', '6', <CalendarOutlined />,'/schedules'),
  getItem('Tags', '7', <TagsOutlined />,'/tags'),
];

const bottomItems = [
  getItem('Logout', '8', <LogoutOutlined />, '/login'),
];

const Navbar = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical"><Image src={"/android-chrome-192x192.png"} width={30} height={30} alt=''></Image>ValueConnect</div><br/>
        <Menu className='nav-menu' mode="inline" items={items} style={{border:'none',fontSize:'1rem',backgroundColor:'#fffaec',color:'#20201e'}}/>
        <Menu className='nav-menu-bot' theme='light' mode="inline" style={{position: 'absolute',bottom: 0,border:'none',fontSize:'1rem',backgroundColor:'#fffaec',color:'#fbfbf2'}} items={bottomItems} />
      </Sider>
      <Layout style={{marginInlineStart: 200,backgroundColor:'#FFFAEC'}}>
        <Content >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Navbar;