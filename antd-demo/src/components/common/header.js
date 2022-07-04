import { Layout, Button, SearchOutlined } from "antd";
import React from "react";

function AppHeader() {
    return (
        <Layout>
            <h1 style={{color: "white",}}>Header</h1>
            <Button icon={<SearchOutlined />}>Search</Button>
        </Layout>
    );
}

export default AppHeader;