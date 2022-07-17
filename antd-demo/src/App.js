import './App.css';
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Row, Card, Col, Typography } from 'antd';
import { useState } from 'react';

import AppHeader from './components/common/header';
import SelectColor from './components/common/selectColor';
import CommemtBox from './components/commentBox';
import Statics from './components/statistic';

let { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      
      <Layout className="site-layout">
      <Header>
          <AppHeader/>
      </Header>

        <Content
          style={{
            margin: '40px 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bille</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Title>Dashboard</Title>
             <Row>
               <Col>
                 <Card
                  title="Default size card"
                  extra={<a href="#">More</a>}
                  style={{
                     width: 300,
                     backgroundColor: "pink",
                   }}
                >
                  <p>Card content1</p>
                   <p>Card content2</p>                   
                   <p>Card content3</p>
                   <SelectColor/>
                 </Card>
                 <Card
                  size="small"
                   title="Small size card"
                extra={<a href="#">More</a>}
                  style={{
                    width: 300,
                   }}
                 >
                  <p>Card content1</p>
                  <p>Card content</p>
                  <p>Card content</p>
                  <Statics/>
                 </Card>
               </Col>
             </Row>
          </div>
          <CommemtBox/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;