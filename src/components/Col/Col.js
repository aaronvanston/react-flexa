import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { themeProvider } from '../../theme';
import { filterProps, mediaQuery, columnWidth, gutter, CSSProperty } from '../../helpers';

const Col = styled(props =>
  React.createElement(props.elementType, filterProps(props, Col.propTypes)),
)`
  // Initial component properties
  box-sizing: border-box;

  ${props => themeProvider.breakpointsKeys(props).map(breakpoint => mediaQuery(props)[breakpoint]`
    // Generated Display
    ${CSSProperty(props, breakpoint, 'display')}

    // Generate gutter
    ${gutter.col(props, breakpoint)}

    // Generate flex rule before width, this avoid override
    ${CSSProperty(props, breakpoint, 'flex')}

    // Generate column width
    ${columnWidth(props, breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(props, breakpoint, 'order')}
    ${CSSProperty(props, breakpoint, 'align-self')}
  `)}
`;

Col.defaultProps = {
  order: 0,
  alignSelf: 'auto',
  elementType: 'div',
  display: 'block',
  flex: '0 0 auto',
  sibling: '',
};

const displayOptions = ['flex', 'inline-flex', 'block', 'none', 'inline-block'];
export const alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

Col.propTypes = {
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['hidden', 'auto'])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['hidden', 'auto'])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['hidden', 'auto'])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf(['hidden', 'auto'])]),
  sibling: PropTypes.string,

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

  elementType: PropTypes.string,

  flex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  display: PropTypes.oneOfType([
    PropTypes.oneOf(displayOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(displayOptions),
      sm: PropTypes.oneOf(displayOptions),
      md: PropTypes.oneOf(displayOptions),
      lg: PropTypes.oneOf(displayOptions),
    }),
  ]),

  children: PropTypes.node,
};

Col.displayName = 'Col';

export default Col;
