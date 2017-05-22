import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Row, Col } from '../src';

const Box = styled.div`
  background-color: DodgerBlue;
  color: white;
  font-family: "Avenir Next", sans-serif;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  height: 1rem;
  line-height: 1rem;
`;

storiesOf('Responsive', module)
  .add('Basic', () => (
    <Row flexWrap="wrap">
      <Col xs={12} sm={3} md={2} lg={1}><Box /></Col>
      <Col xs={6} sm={6} md={8} lg={10}><Box /></Col>
      <Col xs={6} sm={3} md={2} lg={1}><Box /></Col>
    </Row>
  ));

storiesOf('Fluid', module)
  .add('Basic', () => (
    <Row flexWrap="wrap">
      <Col xs={12}><Box /></Col>
      <Col xs={6}><Box /></Col>
      <Col xs={6}><Box /></Col>
    </Row>
  ));
