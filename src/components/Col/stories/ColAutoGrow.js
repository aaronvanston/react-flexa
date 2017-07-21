import React from 'react';

import { Box, Section, Title } from '../../../../stories/components';
import { Row, Col } from '../../';

const VerticalRow = Row.extend`
  height: 600px;
`;

export default () => (
  <div>
    <Section>
      <Title>Horizontal layout with auto grow cols</Title>
      <Row>
        <Col>
          <Box>0</Box>
        </Col>
        <Col autoGrow>
          <Box>auto grow</Box>
        </Col>
        <Col>
          <Box>0</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>Horizontal layout with auto grow cols and Responsive cols</Title>
      <Row>
        <Col md={4} lg={2}>
          <Box>responsive</Box>
        </Col>
        <Col autoGrow>
          <Box>auto grow</Box>
        </Col>
        <Col md={2} lg={4}>
          <Box>responsive</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Row>
        <Col md={4} lg={2}>
          <Box>responsive</Box>
        </Col>
        <Col autoGrow>
          <Box>auto grow</Box>
        </Col>
        <Col autoGrow>
          <Box>auto grow</Box>
        </Col>
        <Col md={2} lg={4}>
          <Box>responsive</Box>
        </Col>
      </Row>
    </Section>

    <Section>
      <Title>Vertical layout with auto grow cols into horizontal layout</Title>
      <Row>
        <Col xs={6}>
          <VerticalRow alignItems={'stretch'} flexDirection={'column'}>
            <Col>
              <Row>
                <Col>
                  <Box>0</Box>
                </Col>
                <Col autoGrow>
                  <Box>auto grow</Box>
                </Col>
                <Col>
                  <Box>0</Box>
                </Col>
              </Row>
            </Col>
            <Col autoGrow flex>
              <Box autoGrow>vertical autoGrow</Box>
            </Col>
            <Col>
              <Box>responsive</Box>
            </Col>
          </VerticalRow>
        </Col>
        <Col xs={6}>
          <VerticalRow alignItems={'stretch'} flexDirection={'column'}>
            <Col>
              <Box>responsive</Box>
            </Col>
            <Col autoGrow flex>
              <Box autoGrow>vertical autoGrow</Box>
            </Col>
            <Col>
              <Box>responsive</Box>
            </Col>
          </VerticalRow>
        </Col>
      </Row>
    </Section>
  </div>
);
