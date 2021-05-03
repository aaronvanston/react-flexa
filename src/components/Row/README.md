# Row

A component used to display and position children columns within a grid system.

## Properties

View detailed property information in [Row props](https://github.com/aaronvanston/react-flexa#row-props) within the react-flexa readme.

- `gutter`: Sets the width of the gutter to be used between columns.
- `display`: This defines a flex container; inline or block.
- `flexDirection`: This establishes the main-axis of the flex container.
- `flexWrap`: This enables `Col` elements to wrap onto a new line.
- `justifyContent`: This defines the alignment along the main axis.
- `alignItems`: This defines how flex items are laid out along the cross axis on the current line.
- `alignContent`: This aligns a flex container's lines within when there is extra space in the cross-axis.

Flexbox descriptions sourced from [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Usage

### Basic

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row justifyContent="center" alignItems="baseline">
    ...
  </Row>
);
```

### Responsive

```js
import React from 'react';
import { Row, Col } from 'react-flexa';

export default () => (
  <Row justifyContent={{ sm: "center", lg: "flex-end" }} gutter="16px">
    ...
  </Row>
);
```

Read more about react-flexa [responsive api using objects.](https://github.com/aaronvanston/react-flexa#responsive-api-using-objects)
