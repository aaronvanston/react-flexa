import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../src';

storiesOf('react-flexa', module)
  .add('basic example', () => (
    <Row justifyContent="center">
      <Col xs={3}>25% width</Col>
      <Col xs={3}>25% width</Col>
    </Row>
  ));
