/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Col, Fluid, Responsive } from './stories';

storiesOf('Col', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Col />)
  .add('Fluid example', () => <Fluid />)
  .add('Responsive example', () => <Responsive />);
