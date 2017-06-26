# Col

A component for creating a column containing other elements, within a grid system. A `<Col/>` must be wrapped in a parent `<Row/>`.

## Properties

View detailed property information in [Col props](https://github.com/aaronvanston/react-flexa#col-props) within the react-flexa readme.

- `xs`: Sets the width of the col based the column configuration (12 by default) for the XS breakpoint and up.
- `sm`: Sets the width of the col based the column configuration (12 by default) for the SM breakpoint and up.
- `md`: Sets the width of the col based the column configuration (12 by default) for the MD breakpoint and up.
- `lg`: Sets the width of the col based the column configuration (12 by default) for the LG breakpoint and up.
- `gutter`: Sets the width of the gutter to be used between columns.
- `order`: Controls the order in which they appear in the flex container.
- `alignSelf`: Controls vertical alignment in the flex container.

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Usage

### Basic

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row>
    <Col xs={6}></Col>
    <Col xs={6}></Col>
  </Row>
);
```

### Responsive

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row>
    <Col xs={12} md={6} lg={4} order={{ xs: 2, lg: 1 }}></Col>
    <Col xs={12} md={6} lg={8} order={{ xs: 1, lg: 2 }}></Col>
  </Row>
);
```

Read more about react-flexa [responsive api using objects.](https://github.com/aaronvanston/react-flexa#responsive-api-using-objects)
