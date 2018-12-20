import React from 'react';

import { Box, Title, Section } from '../../../../stories/components';
import { Row, Col } from '../../';

export default () => (
  <div>
    <Section>
      <Title>One fixed column and other responsive</Title>
      <Row>
        <Col xs={12} sm={6} md={6} lg="390px">
          <Box>col 1</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="calc(80% - 390px)">
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="20%">
          <Box bgColor="#ff9800">col 3</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>One fixed column and responsive gutter</Title>
      <Row gutter={{ xs: 0, sm: 2, md: 4, lg: 8 }}>
        <Col xs={12} sm={6} md={6} lg="390px">
          <Box>col 1</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="calc(80% - 390px)">
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="20%">
          <Box bgColor="#ff9800">col 3</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>One fixed column and other responsive order</Title>
      <Row>
        <Col xs={12} sm={6} md={6} lg="390px" order={{ xs: 4, sm: 3, md: 2, lg: 1 }}>
          <Box>col 1</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="calc(80% - 390px)" order={1}>
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="20%">
          <Box bgColor="#ff9800">col 3</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>One fixed column and other responsive alignSelf</Title>
      <Row>
        <Col xs={12} sm={6} md={6} lg="390px">
          <Box height="5rem">col 1</Box>
        </Col>

        <Col
          xs={12}
          sm={6}
          md={6}
          lg="calc(80% - 390px)"
          alignSelf={{ xs: 'flex-end', md: 'center', lg: 'flex-start' }}
        >
          <Box bgColor="#9c27b0">col 2</Box>
        </Col>

        <Col xs={12} sm={6} md={6} lg="20%">
          <Box bgColor="#ff9800" height="5rem">col 3</Box>
        </Col>
      </Row>
    </Section>
  </div>
);
