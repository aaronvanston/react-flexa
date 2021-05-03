import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { themeProvider } from '../../theme';
import { filterProps, mediaQuery, gutter, CSSProperty } from '../../helpers';

const Row = styled(props =>
  React.createElement(props.elementType, filterProps(props, Row.propTypes)),
)`
  // Initial component property
  box-sizing: border-box;

  ${props => themeProvider.breakpointsKeys(props).map(breakpoint => mediaQuery(props)[breakpoint]`
    // Generate gutter
    ${gutter.row(props, breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(props, breakpoint, 'display')}
    ${CSSProperty(props, breakpoint, 'flex-direction')}
    ${CSSProperty(props, breakpoint, 'flex-wrap')}
    ${CSSProperty(props, breakpoint, 'justify-content')}
    ${CSSProperty(props, breakpoint, 'align-items')}
    ${CSSProperty(props, breakpoint, 'align-content')}
  `)}
`;

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
  elementType: 'div',
};

export const displayOptions = ['flex', 'inline-flex'];
export const flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
export const flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
export const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
export const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
export const alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];

Row.propTypes = {
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

  display: PropTypes.oneOfType([
    PropTypes.oneOf(displayOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(displayOptions),
      sm: PropTypes.oneOf(displayOptions),
      md: PropTypes.oneOf(displayOptions),
      lg: PropTypes.oneOf(displayOptions),
    }),
  ]),

  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(flexDirectionOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(flexDirectionOptions),
      sm: PropTypes.oneOf(flexDirectionOptions),
      md: PropTypes.oneOf(flexDirectionOptions),
      lg: PropTypes.oneOf(flexDirectionOptions),
    }),
  ]),

  flexWrap: PropTypes.oneOfType([
    PropTypes.oneOf(flexWrapOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(flexWrapOptions),
      sm: PropTypes.oneOf(flexWrapOptions),
      md: PropTypes.oneOf(flexWrapOptions),
      lg: PropTypes.oneOf(flexWrapOptions),
    }),
  ]),

  justifyContent: PropTypes.oneOfType([
    PropTypes.oneOf(justifyContentOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(justifyContentOptions),
      sm: PropTypes.oneOf(justifyContentOptions),
      md: PropTypes.oneOf(justifyContentOptions),
      lg: PropTypes.oneOf(justifyContentOptions),
    }),
  ]),

  alignItems: PropTypes.oneOfType([
    PropTypes.oneOf(alignItemsOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignItemsOptions),
      sm: PropTypes.oneOf(alignItemsOptions),
      md: PropTypes.oneOf(alignItemsOptions),
      lg: PropTypes.oneOf(alignItemsOptions),
    }),
  ]),

  alignContent: PropTypes.oneOfType([
    PropTypes.oneOf(alignContentOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignContentOptions),
      sm: PropTypes.oneOf(alignContentOptions),
      md: PropTypes.oneOf(alignContentOptions),
      lg: PropTypes.oneOf(alignContentOptions),
    }),
  ]),

  elementType: PropTypes.string,

  children: PropTypes.node,
};

Row.displayName = 'Row';

export default Row;
