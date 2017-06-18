import React from 'react';

import { Box } from '../../../../stories/components';
import { Row, Col } from '../../';

export default () => (
  <Row>
    <Col xs={12}>
      <Box>12</Box>
    </Col>

    <Col xs={6}>
      <Box>6</Box>
    </Col>
    <Col xs={6}>
      <Box>6</Box>
    </Col>

    <Col xs={4}>
      <Box>4</Box>
    </Col>
    <Col xs={4}>
      <Box>4</Box>
    </Col>
    <Col xs={4}>
      <Box>4</Box>
    </Col>

    <Col xs={3}>
      <Box>3</Box>
    </Col>
    <Col xs={3}>
      <Box>3</Box>
    </Col>
    <Col xs={3}>
      <Box>3</Box>
    </Col>
    <Col xs={3}>
      <Box>3</Box>
    </Col>
  </Row>
);
