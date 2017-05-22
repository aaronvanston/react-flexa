import React from 'react';
import { storiesOf } from '@storybook/react';

import Fluid from './Fluid';
import Responsive from './Responsive';

storiesOf('Fluid', module)
  .add('Basic', () => <Fluid />);

storiesOf('Responsive', module)
  .add('Basic', () => <Responsive />);
