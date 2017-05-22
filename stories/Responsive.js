import React from 'react';

import { Row, Col } from '../src';
import Box from './Box';

export default () => (
  <Row flexWrap="wrap">
    <Col xs={12} sm={3} md={2} lg={1}>
      <Box />
    </Col>

    <Col xs={6} sm={6} md={8} lg={10}>
      <Box />
    </Col>

    <Col xs={6} sm={3} md={2} lg={1}>
      <Box />
    </Col>
  </Row>
);
