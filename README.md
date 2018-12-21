# react-flexa

[![Build Status](https://travis-ci.org/aaronvanston/react-flexa.svg?branch=master)](https://travis-ci.org/aaronvanston/react-flexa) [![npm version](https://badge.fury.io/js/react-flexa.svg)](https://badge.fury.io/js/react-flexa) [![codecov](https://codecov.io/gh/aaronvanston/react-flexa/branch/master/graph/badge.svg)](https://codecov.io/gh/aaronvanston/react-flexa)

Responsive React Flexbox (CSS Flexible Box Layout Module) grid system based heavily on the standard CSS API.

## [react-flexa demo](https://aaronvanston.github.io/react-flexa)

## Features

- Simple API is based off [CSS Flexbox API](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes), no need to learn a new syntax.
- Uses [styled-components](https://github.com/styled-components/styled-components) to customize generated components styles
- Easily change grid settings based on responsive breakpoints

## Installation

```js
yarn add react-flexa
```

## Usage

### Basic usage

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent="center">
        <Col xs={3}>25% width</Col>
        <Col xs={3}>25% width</Col>
      </Row>
    );
  }
};
```

### Advance responsive usage

View [Responsive API using objects](#responsive-api-using-objects) for more information on how to responsively set flexbox properties based on breakpoint.

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent={{ sm: "center", lg: "flex-end" }} gutter="16px">
        <Col xs={3} md={6}>25% width on extra small displays, 50% width on medium displays and up</Col>
        <Col xs={3} md={6}>25% width on extra small displays, 50% width on medium displays and up</Col>
      </Row>
    );
  }
};
```

## API

### Row Props

These are the **available** and **reserved** props that can be used on the `Row` component. All other props such as `className` will be automatically be passed down to the generated element.

| Prop             | Valid types                                                    | Valid values                                                                                         | Default value  | Description                                                                                                                                                                                                                                         |
|:-----------------|:---------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `gutter`         | integer,<br>string,<br>[object](#responsive-api-using-objects) | `'1rem'`<br>`'12px'`<br>`4`<br>(etc)                                                                 | `'1rem'`       | Sets the width of the gutter to be used between columns. For correct positioning you must set the same value (if custom) on children Col's.                                                                                                         |
| `display`        | string,<br>[object](#responsive-api-using-objects)             | `'flex'`<br>`'inline-flex'`                                                                          | `'flex'`       | This defines a flex container; inline or block depending on the given value. [Read more about display.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2)                                                                |
| `flexDirection`  | string,<br>[object](#responsive-api-using-objects)             | `'row'`<br>`'row-reverse'`<br>`'column'`<br>`'column‑reverse'`                                       | `'row'`        | This establishes the main-axis<br>thus defining the direction flex items are placed in the flex container. [Read more about flex-direction.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3)                           |
| `flexWrap`       | string<br>[object](#responsive-api-using-objects)              | `'nowrap'`<br>`'wrap'`<br>`'wrap‑reverse'`                                                           | `'wrap'`     | By default<br>flex items will wrap to new lines as needed. You can change it to allow all items try to fit onto one line with this property. [Read more about flex-wrap.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4) |
| `justifyContent` | string,<br>[object](#responsive-api-using-objects)             | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'space‑between'`<br>`'space‑around'`                | `'flex‑start'` | This defines the alignment along the main axis. It helps distribute extra free space left over. [Read more about justify-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6)                                     |
| `alignItems`     | string,<br>[object](#responsive-api-using-objects)             | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'baseline'`<br>`'stretch'`                          | `'stretch'` | This defines the default behavior for how flex items are laid out along the cross axis on the current line. [Read more about align-items.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7)                             |
| `alignContent`   | string,<br>[object](#responsive-api-using-objects)             | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'space‑between'`<br>`'space-around'`<br>`'stretch'` | `'stretch'` | This aligns a flex container's lines within when there is extra space in the cross-axis. [Read more about align-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8)                                              |
| `elementType`    | string,<br>[object](#responsive-api-using-objects)             | `'div'`<br>`'span'`                                                                                  | `'div'`        | This enables you to change the HTML element type generated.                                                                                                                                                                                         |

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Col Props

These are the **available** and **reserved** props that can be used on the `Col` component. All other props such as `className` will be automatically be passed down to the generated element.

| Prop          | Valid types                                                 | Valid values                                                                            | Default value | Description                                                                                                                                                                                                                                               |
|:--------------|:------------------------------------------------------------|:----------------------------------------------------------------------------------------|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `xs`          | integer/ string                                             | `0`-`12`<br>(based on default columns)<br>`hidden`<br>`auto` <br> `'390px'` - `'calc=(100% - 390px)'`         | nill          | **Number:** Sets the width of the col based the column configuration (12 by default) for the XS breakpoint and up.<br> **String:** Set a width like string `xs="390px"` to fixed have a fixed colum, or create a calc `xs="calc(100% - 390px)"` base on sibling to have a responsive column.                                                                                                                                                    |
| `sm`          | integer/ string                                             | `0`-`12`<br>(based on default columns)<br>`hidden`<br>`auto` <br> `'390px'` - `'calc=(100% - 390px)'`         | nill          | **Number:** Sets the width of the col based the column configuration (12 by default) for the SM breakpoint and up.<br> **String:** Set a width like string `sm="390px"` to fixed have a fixed colum, or create a calc `sm="calc(100% - 390px)"` base on sibling to have a responsive column.                                                                                                                                                    |
| `md`          | integer/ string                                             | `0`-`12`<br>(based on default columns)<br>`hidden`<br>`auto` <br> `'390px'` - `'calc=(100% - 390px)'`         | nill          | **Number:** Sets the width of the col based the column configuration (12 by default) for the MD breakpoint and up.<br> **String:** Set a width like string `md="390px"` to fixed have a fixed colum, or create a calc `md="calc(100% - 390px)"` base on sibling to have a responsive column.                                                                                                                                                    |
| `lg`          | integer/ string                                             | `0`-`12`<br>(based on default columns)<br>`hidden`<br>`auto` <br> `'390px'` - `'calc=(100% - 390px)'`         | nill          | **Number:** Sets the width of the col based the column configuration (12 by default) for the LG breakpoint and up.<br> **String:** Set a width like string `lg="390px"` to fixed have a fixed colum, or create a calc `lg="calc(100% - 390px)"` base on sibling to have a responsive column.                                                                                                                                                    |
| `gutter`      | integer, string,<br>[object](#responsive-api-using-objects) | `'1rem'`<br>`'12px'`<br>`4`                                                             | `'1rem'`      | Sets the width of the gutter to be used between columns. For correct positioning you must set the same value (if custom) on the parent Row                                                                                                                |
| `order`       | string,<br>[object](#responsive-api-using-objects)          | `-1`<br>`0`<br>`1`<br>(etc)                                                             | `0`           | By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container. [Read more about order.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-9) |
| `alignSelf`   | string,<br>[object](#responsive-api-using-objects)          | `'auto'`<br>`'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'baseline'`<br>`'stretch'` | `'auto'`      | This allows the default alignment (or the one specified by align‑items) to be overridden for individual flex items. [Read more about align-self.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-14)                           |
| `elementType` | string,<br>[object](#responsive-api-using-objects)          | `'div'`<br>`'span'`                                                                     | `'div'`       | This enables you to change the HTML element type generated.                                                                                                                                                                                               |
| `flex` | string, integer,<br>[object](#responsive-api-using-objects)          | `1`<br>`'1 1 auto'`<br>`'1 0 auto'`<br>(etc).                                                                   | `0 0 auto`      | This allow to grow automatically (flex: 1)                                                                                                                               |
| `display` | string,<br>[object](#responsive-api-using-objects)          | `'flex'`<br>`'block'`<br>`'inline'`<br>(etc)                                                                   | `block`      | This defines the display property of the col, inline, block, flex etc.                                                                                                                                                 |

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Responsive API using objects

Props with a valid type of "object" enable you to set the value corresponding to a breakpoint. Including an object with keys matching that of the breakpoints will set the desired value on that particular breakpoint.

For example, the object for setting a `Row` component setting `justifyContent` to "flex-start" on `sm` breakpoint, "center" on `md` breakpoint, and finally "flex-end" on `lg` breakpoint would look like:

```js
{
  xs: "flex-start",
  md: "center",
  lg: "flex-end",
}
```

**Note:** we have chosen to not change anything on the `sm` breakpoint.

Using this object in the example of the `Row` component:

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent={{ xs: "flex-start", md: "center", lg: "flex-end" }}>
        ...
      </Row>
    );
  }
};
```

This will now generate CSS with `min-width` media queries for the responsive values. **Note:** a media query is not set for any value assigned to `xs` due to mobile first min-width media query structure.

#### Default values when using responsive objects

Props such as `gutter` by will use the default value from the ThemeProvider if not set within the object. For example:

```js
<Row gutter={{ xs: 1, lg: 2 }} />
```

Will take the `sm` and `md` gutter values set by default in the ThemeProvider. To remove these simple set them as `0` to these within the responsive object.

## Theming

### Default Theme

By default the configuration for react-flex is:

```js
{
  columns: 12,
  gutter: {
    xs: 1, // rem
    sm: 1, // rem
    md: 2, // rem
    lg: 2, // rem
  },
  breakpoints: {
    xs: 0, // rem
    sm: 30, // rem
    md: 48, // rem
    lg: 60, // rem
  },
};
```

### Custom Theme

You can customize these values using the `<ThemeProvider />` component from `styled-components` and wrap your `App` with the modified values. **Note**: You **don't need to** include all values in the the new theme if you don't wish to overwrite them.

Its important you use the key of `flexa` when applying the theme (as shown below).

```js
import React from 'react';
import { ThemeProvider } from 'styled-components';

const customTheme = {
  flexa: {
    columns: 24,
    gutter: {
      xs: 2,
      sm: 2,
      md: 4,
      lg: 4,
    },
    breakpoints: {
      xs: 0,
      sm: 50,
      md: 60,
      lg: 70,
    },
  }
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
        ...
      </ThemeProvider>
    );
  }
};
```

## Development

### Requirements

- [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/) 6 or later

### Setup

1. Install the version of Node specified in `.nvmrc` (optional):

  ```shell
  $ nvm install && nvm use
  ```

2. Install [Yarn](https://yarnpkg.com/en/):

  ```shell
  $ npm i -g yarn
  ```

3. Install the project's dependencies:

  ```shell
  $ yarn
  ```

### Usage

Develop with [Storybook](https://storybooks.js.org/):

```shell
$ yarn storybook
```

Run unit tests with [Jest](https://facebook.github.io/jest/):

```shell
$ yarn jest

# Watch for changes
$ yarn jest:watch
```

Lint code with [ESLint](http://eslint.org/):

```shell
$ yarn lint
```

## License

[MIT License](.github/LICENSE.md)

