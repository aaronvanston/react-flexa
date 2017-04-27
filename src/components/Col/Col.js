import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { themeProvider } from '~/theme';
import { filterProps, mediaQuery, columnWidth, gutter, CSSProperty } from '~/helpers';

const Col = styled(props => React.createElement(props.elementType, filterProps(props, Col.PropTypes)))`
  // Initial component properties
  box-sizing: border-box;
  flex: 0 0 auto;
  display: block;

  ${props => themeProvider.breakpoints.map(breakpoint => mediaQuery[breakpoint]`
    // Generate gutter
    ${gutter.col(props, breakpoint)}

    // Generate column width
    ${columnWidth(props, breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(props, breakpoint, 'order')}
    ${CSSProperty(props, breakpoint, 'align-self')}
  `)};
`;

Col.defaultProps = {
  order: 0,
  alignSelf: 'auto',
  elementType: 'div',
};

const alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

Col.PropTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,

  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      xs: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      sm: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      md: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      lg: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ]),

  order: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
    }),
  ]),

  alignSelf: PropTypes.oneOfType([
    PropTypes.oneOf(alignSelfOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignSelfOptions),
      sm: PropTypes.oneOf(alignSelfOptions),
      md: PropTypes.oneOf(alignSelfOptions),
      lg: PropTypes.oneOf(alignSelfOptions),
    }),
  ]),

  elementType: 'div',

  children: PropTypes.node,
};

Col.displayName = 'Col';

export default Col;
