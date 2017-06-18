import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const context = require.context('../src', true, /.stories.js$/);

setOptions({
  name: 'react-flexa',
  url: 'https://github.com/aaronvanston/react-flexa',
});

function loadStories() {
  context.keys().map(file => context(file));
}

configure(loadStories, module);
