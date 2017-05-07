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
import { Row, Row } from 'react-flexa'

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
import { Row, Row } from 'react-flexa'

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

### Row

Available props that can be used on the `Row` component. All other props such as `className` will be automatically be passed down to the generated element.

| Prop | Valid types | Valid values | Default value | Description |
|------|-------------|--------------|---------------|-------------|
| `gutter` | integer<br> string<br> object | '1rem'<br>'12px'<br>`4`<br>(etc) | '1rem' | Sets the width of the gutter to be used between columns. For correct positioning you must set the same value (if custom) on children Col's. |
| `display` | string<br>object | 'flex'<br>'flex‑inline' | 'flex' | This defines a flex container; inline or block depending on the given value. [Read more about display.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-2) |
| `flexDirection` | string<br>object | 'row'<br>'row-reverse'<br>'column'<br>'column‑reverse' | 'row' | This establishes the main-axis<br>thus defining the direction flex items are placed in the flex container. [Read more about flex-direction.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3) |
| `flexWrap` | string<br> object | 'nowrap'<br>'wrap'<br>'wrap‑reverse' | 'nowrap' | By default<br>flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. [Read more about flex-wrap.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4) |
| `justifyContent` | string<br>object | 'flex‑start'<br>'flex‑end'<br>'center'<br>'space‑between'<br>'space‑around' | 'flex‑start' | This defines the alignment along the main axis. It helps distribute extra free space left over. [Read more about justify-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6) |
| `alignItems` | string<br>object | 'flex‑start'<br>'flex‑end'<br>'center'<br>'baseline'<br>'stretch' | 'flex‑start' | This defines the default behaviour for how flex items are laid out along the cross axis on the current line. [Read more about align-items.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7) |
| `alignContent` | string<br>object | 'flex‑start'<br>'flex‑end'<br>'center'<br>'space‑between'<br>'space-around'<br>'stretch' | 'flex‑start' | This aligns a flex container's lines within when there is extra space in the cross-axis. [Read more about align-content.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8) |
| `elementType` | string<br>object | 'div'<br>'span' | 'div' | This enables you to change the HTML element type generated. |

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


