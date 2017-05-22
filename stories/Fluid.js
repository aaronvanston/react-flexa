import React from 'react';

import { Row, Col } from '../src';
import Box from './Box';

export default () => (
  <Row flexWrap="wrap">
    <Col xs={12}>
      <Box />
    </Col>

    <Col xs={6}>
      <Box />
    </Col>

    <Col xs={6}>
      <Box />
    </Col>
  </Row>
);
