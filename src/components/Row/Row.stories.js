/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import { Row } from './stories';
import README from './README.md';

storiesOf('Row', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(README))
  .add('Default', () => <Row />);
