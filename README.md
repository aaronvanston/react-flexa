# react-flexa

Responsive React Flexbox (CSS Flexible Box Layout Module) grid system based heavily on the standard CSS API.

[![Build Status](https://travis-ci.org/aaronvanston/react-flexa.svg?branch=master)](https://travis-ci.org/aaronvanston/react-flexa)

## Features
- Simple API is based off CSS Flexbox API, no need to learn a new syntax.
- Uses styled-components to customize generated components styles
- Easily change grid settings based on responsive breakpoints

## Installation

```js
yarn add react-flexa
```

## Usage

### Basic usage

```js
import React from 'react'
import { Row, Col } from 'react-flexa'

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent="center">
        <Col xs={3}>25% width</Col>
        <Col xs={3}>25% width</Col>
      </Row>
    )
  }
}
```

### Advance responsive usage
View [Responsive API using objects](#responsive-api-using-objects) for more information on how to responsivly set flexbox properties based on breakpoint.
```js
import React from 'react'
import { Row, Col } from 'react-flexa'

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent={{ sm: "center", lg: "flex-end" }} gutter="16px">
        <Col xs={3} md={6}>25% width on mobile, 50% width on medium displays and up</Col>
        <Col xs={3} md={6}>25% width on mobile, 50% width on medium displays and up</Col>
      </Row>
    )
  }
}
```

## API

### Row Props

These are the **available** and **reserved** props that can be used on the `Row` component. All other props such as `className` will be automatically be passed down to the generated element.

| Prop | Valid types | Valid values | Default value | Description |
|------|-------------|--------------|---------------|-------------|
| `gutter` | integer,<br>string,<br>[object](#responsive-api-using-objects) | `'1rem'`<br>`'12px'`<br>`4`<br>(etc) | `'1rem'` | Sets the width of the gutter to be used between columns. For correct positioning you must set the same value (if custom) on children Col's. |
| `display` | string,<br>[object](#responsive-api-using-objects) | `'flex'`<br>`'flex‑inline'` | `'flex'` | This defines a flex container; inline or block depending on the given value. [Read more about display.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2) |
| `flexDirection` | string,<br>[object](#responsive-api-using-objects) | `'row'`<br>`'row-reverse'`<br>`'column'`<br>`'column‑reverse'` | `'row'` | This establishes the main-axis<br>thus defining the direction flex items are placed in the flex container. [Read more about flex-direction.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3) |
| `flexWrap` | string<br>[object](#responsive-api-using-objects) | `'nowrap'`<br>`'wrap'`<br>`'wrap‑reverse'` | `'nowrap'` | By default<br>flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. [Read more about flex-wrap.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4) |
| `justifyContent` | string,<br>[object](#responsive-api-using-objects) | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'space‑between'`<br>`'space‑around'` | `'flex‑start'` | This defines the alignment along the main axis. It helps distribute extra free space left over. [Read more about justify-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6) |
| `alignItems` | string,<br>[object](#responsive-api-using-objects) | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'baseline'`<br>`'stretch'` | `'flex‑start'` | This defines the default behaviour for how flex items are laid out along the cross axis on the current line. [Read more about align-items.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7) |
| `alignContent` | string,<br>[object](#responsive-api-using-objects) | `'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'space‑between'`<br>`'space-around'`<br>`'stretch'` | `'flex‑start'` | This aligns a flex container's lines within when there is extra space in the cross-axis. [Read more about align-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8) |
| `elementType` | string,<br>[object](#responsive-api-using-objects) | `'div'`<br>`'span'` | `'div'` | This enables you to change the HTML element type generated. |

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Col Props

These are the **available** and **reserved** props that can be used on the `Col` component. All other props such as `className` will be automatically be passed down to the generated element.

| Prop | Valid types | Valid values | Default value | Description |
|------|-------------|--------------|---------------|-------------|
| `xs` | integer | `1`-`12`<br>(based on default columns) | nill | Sets the width of the col based the column configuration (12 by default) for the XS breakpoint and up. |
| `sm` | integer | `1`-`12`<br>(based on default columns) | nill | Sets the width of the col based the column configuration (12 by default) for the SM breakpoint and up. |
| `md` | integer | `1`-`12`<br>(based on default columns) | nill | Sets the width of the col based the column configuration (12 by default) for the MD breakpoint and up. |
| `lg` | integer | `1`-`12`<br>(based on default columns) | nill | Sets the width of the col based the column configuration (12 by default) for the lG breakpoint and up. |
| `gutter` | integer, string,<br>[object](#responsive-api-using-objects) | `'1rem'`<br>`'12px'`<br>`4` | `'1rem'` | Sets the width of the gutter to be used between columns. For correct positioning you must set the same value (if custom) on the parent Row |
| `order` | string,<br>[object](#responsive-api-using-objects) | `-1`<br>`0`<br>`1`<br>(etc) | `0` | By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container. [Read more about order.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-9) |
| `alignSelf` | string,<br>[object](#responsive-api-using-objects) | `'auto'`<br>`'flex‑start'`<br>`'flex‑end'`<br>`'center'`<br>`'baseline'`<br>`'stretch'` | `'auto'`| This allows the default alignment (or the one specified by align‑items) to be overridden for individual flex items. [Read more about align-self.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-14) |
| `elementType` | string,<br>[object](#responsive-api-using-objects) | `'div'`<br>`'span'` | `'div'` | This enables you to change the HTML element type generated. |

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


### Responsive API using objects
Props with a valid type of "object" enable you to set the value corresponding to a breakpoint. Including an object with keys matching that of the breakpoints will set the desired value on that particular breakpoint.

For example, the object for setting a `Row` compoent setting `justifyContent` to "flex-start" on `sm` breakpoint, "center" on `md` breakpoint, and finally "flex-end" on `lg` breakpoint would look like:

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
import React from 'react'
import { Row, Col } from 'react-flexa'

class Component extends React.Component {
  render() {
    return (
      <Row justifyContent={{ xs: "flex-start", md: "center", lg: "flex-end" }}>
        ...
      </Row>
    )
  }
}
```

This will now generate CSS with `min-width` media queries for the responsive values. **Note:** a media query is not set for any value assigned to `xs` due to mobile first min-width media query structure.


## License
[MIT License](.github/LICENSE.md)
