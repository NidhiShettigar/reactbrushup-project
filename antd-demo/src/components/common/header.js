import { Layout, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import React from "react";

function AppHeader() {
    return (
        <Layout >
            <h1 style={{color: "white", backgroundColor:"rgb(0, 21, 41)"}}>Header</h1>
            <Button icon={<SearchOutlined />}>Search</Button>
        </Layout>
    );
}

export default AppHeader;