import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
import React from 'react';

const Statics = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);

export default Statics;