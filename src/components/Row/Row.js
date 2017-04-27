import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { themeProvider } from '~/theme';
import { mediaQuery, gutter, CSSProperty } from '~/helpers';

const Row = styled(props => React.createElement(props.elementType || 'div', props))`
  // Initial component property
  box-sizing: border-box;

  ${props => themeProvider.breakpoints.map(breakpoint => mediaQuery[breakpoint]`
    // Generate gutter
    ${gutter.row(props, breakpoint)}

    // Responsive Flexbox properties
    ${CSSProperty(props, breakpoint, 'display')}
    ${CSSProperty(props, breakpoint, 'flex-direction')}
    ${CSSProperty(props, breakpoint, 'flex-wrap')}
    ${CSSProperty(props, breakpoint, 'justify-content')}
    ${CSSProperty(props, breakpoint, 'align-items')}
    ${CSSProperty(props, breakpoint, 'align-content')}
  `)};
`;

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  elementType: 'div',
};

const displayOptions = ['flex', 'flex-inline'];
const flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
const flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch '];

Row.PropTypes = {

  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
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
