/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { select, object } from '@storybook/addon-knobs';

import { Box } from '../../../../stories/components';
import { Row, Col } from '../../';

import {
  displayOptions,
  flexDirectionOptions,
  flexWrapOptions,
  justifyContentOptions,
  alignItemsOptions,
  alignContentOptions,
} from '../Row';

export default () => (
  <Row
    style={{ padding: '10px 10px 0 10px', border: '2px solid #8bc34a', minHeight: '90vh' }}
    gutter={object('gutter (rem)', { xs: 0.5, sm: 0.5, md: 1, lg: 1 })}
    display={select('display', displayOptions, 'flex')}
    flexDirection={select('flex-direction', flexDirectionOptions, 'row')}
    flexWrap={select('flex-wrap', flexWrapOptions, 'wrap')}
    justifyContent={select('justify-content', justifyContentOptions, 'flex-start')}
    alignItems={select('align-items', alignItemsOptions, 'flex-start')}
    alignContent={select('align-content', alignContentOptions, 'flex-start')}
  >
    <Col xs={3}><Box height="5rem">col 1</Box></Col>
    <Col xs={3}><Box>col 2</Box></Col>
    <Col xs={3}><Box>col 3</Box></Col>
    <Col xs={3}><Box>col 4</Box></Col>
    <Col xs={3}><Box>col 5</Box></Col>
    <Col xs={3}><Box height="5rem">col 6</Box></Col>
  </Row>
);
