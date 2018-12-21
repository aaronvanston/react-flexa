/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import { Col, Fluid, Responsive, AutoGrow, Fixed } from './stories';
import README from './README.md';

storiesOf('Col', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('Default', () => <Col />)
  .add('Fluid example', () => <Fluid />)
  .add('Responsive example', () => <Responsive />)
  .add('Auto grow example', () => <AutoGrow />)
  .add('One fixed col', () => <Fixed />);
