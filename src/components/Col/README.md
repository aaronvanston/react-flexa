# Col

A component for creating a column containing other elements, within a grid system. A `<Col/>` must be wrapped in a parent `<Row/>`.

## Properties

View detailed property information in [Col props](https://github.com/aaronvanston/react-flexa#col-props) within the react-flexa readme.

- `xs`: Sets the width of the col based the column configuration (12 by default) for the XS breakpoint and up, or pass a width like string to fixed have a fixed colum.
- `sm`: Sets the width of the col based the column configuration (12 by default) for the SM breakpoint and up, or pass a width like string to fixed have a fixed colum.
- `md`: Sets the width of the col based the column configuration (12 by default) for the MD breakpoint and up, or pass a width like string to fixed have a fixed colum.
- `lg`: Sets the width of the col based the column configuration (12 by default) for the LG breakpoint and up, or pass a width like string to fixed have a fixed colum.
- `sibling`: Sets the width base on sibling size, to make a calc.
- `gutter`: Sets the width of the gutter to be used between columns.
- `order`: Controls the order in which they appear in the flex container.
- `alignSelf`: Controls vertical alignment in the flex container.
- `display`: This defines the display property of the col, inline, block, flex etc.

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

### One fixed column

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row>
    <Col xs={12} sm={6} md={6} lg="390px"></Col>
    <Col xs={12} sm={6} md={6} lg="calc(100% - 390px)"></Col>
  </Row>
);
```

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row>
    <Col xs={12} sm={6} md={6} lg="390px"></Col>
    <Col xs={12} sm={6} md={6} lg="calc(80% - 390px)"></Col>
    <Col xs={12} sm={6} md={6} lg="20%"></Col>
  </Row>
);
```

Read more about react-flexa [responsive api using objects.](https://github.com/aaronvanston/react-flexa#responsive-api-using-objects)
