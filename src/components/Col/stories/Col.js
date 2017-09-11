/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { select, number, object } from '@storybook/addon-knobs';

import { Box } from '../../../../stories/components';
import { Row, Col } from '../../';
import { alignSelfOptions } from '../Col';

export default () => (
  <Row>
    <Col xs={12} sm={4} md={6} lg={3}>
      <Box>col</Box>
    </Col>

    <Col
      xs={number('xs', 12)}
      sm={number('sm', 4)}
      md={number('md', 6)}
      lg={number('lg', 3)}
      gutter={object('gutter (rem)', { xs: 0.5, sm: 0.5, md: 1, lg: 1 })}
      order={number('order', 0)}
      alignSelf={select('align-self', alignSelfOptions, 'auto')}
    >
      <Box bgColor="#ff9800">customize me!</Box>
    </Col>

    <Col xs={12} sm={4} md={6} lg={3}>
      <Box>col</Box>
    </Col>

    <Col xs={12} sm={4} md={6} lg={3}>
      <Box>col</Box>
    </Col>
  </Row>
);
