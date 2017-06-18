import React from 'react';

import { Box, Title, Section } from '../../../../stories/components';
import { Row, Col } from '../../';

export default () => (
  <div>
    <Section>
      <Title>Responsive columns</Title>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Box>col 1</Box>
        </Col>

        <Col xs={12} sm={6} lg={4}>
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={12} sm={6} md={12} lg={4}>
          <Box bgColor="#ff9800">col 3</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>Responsive gutter</Title>
      <Row gutter={{ xs: 0, sm: 2, md: 4, lg: 8 }}>
        <Col xs={4} gutter={{ xs: 0, sm: 2, md: 4, lg: 8 }}>
          <Box>col 1</Box>
        </Col>

        <Col xs={4} gutter={{ xs: 0, sm: 2, md: 4, lg: 8 }}>
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={4} gutter={{ xs: 0, sm: 2, md: 4, lg: 8 }}>
          <Box bgColor="#ff9800">col 3</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>Responsive order</Title>
      <Row>
        <Col xs={3} order={{ xs: 4, sm: 3, md: 2, lg: 1 }}>
          <Box>col 1</Box>
        </Col>

        <Col xs={3} order={1}>
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={3} order={2}>
          <Box bgColor="#ff9800">col 3</Box>
        </Col>

        <Col xs={3} order={3}>
          <Box bgColor="#388e3c">col 4</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>Responsive alignSelf</Title>
      <Row>
        <Col xs={4}>
          <Box height="5rem">col 1</Box>
        </Col>

        <Col
          xs={4}
          alignSelf={{ xs: 'flex-end', md: 'center', lg: 'flex-start' }}
        >
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={4}>
          <Box bgColor="#ff9800" height="5rem">col 3</Box>
        </Col>
      </Row>
    </Section>
  </div>
);
