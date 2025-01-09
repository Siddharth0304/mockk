'use client';
import Link from 'next/link';
import {DesktopOutlined,FileOutlined,DashboardOutlined,PlayCircleOutlined,ReconciliationOutlined,CalendarOutlined,TagsOutlined,UserOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
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
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor:'white',
};
const items = [
  getItem('Dashboard', '1', <DashboardOutlined />,'/dashboard'),
  getItem('Device', '2', <DesktopOutlined />,'/device'),
  getItem('Media', '3', <PlayCircleOutlined />,'/media'),
  getItem('Playlists', '4', <FileOutlined />,'/playlist'),
  getItem('Policy', '5', <ReconciliationOutlined />,'/policy'),
  getItem('Schedules', '6', <CalendarOutlined />,'/schedules'),
  getItem('Tags', '7', <TagsOutlined />,'/tags'),
  getItem('Logout', '8', <UserOutlined />,'/logout'),
];
const Navbar_two = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical"><Image src={"/android-chrome-192x192.png"} width={30} height={30} alt=''></Image></div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{margin: '0 16px',}}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Navbar_two;