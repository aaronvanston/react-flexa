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
