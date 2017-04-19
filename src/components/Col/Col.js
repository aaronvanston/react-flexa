import { PropTypes } from 'react';
import styled from 'styled-components';

import { sortBreakpointProps, mediaQuery, columnWidth, gutter } from '~/helpers';

import { themeProvider } from '~/theme';

const { theme } = themeProvider;

const Col = styled.div`
  /* Initial components properties */
  box-sizing: border-box;
  flex: 0 0 auto;
  display: block;

  /* Flexbox properties */
  /* TODO: integrate responsive values via object */
  order: ${props => props.order};
  align-self: ${props => props.alignSelf};

  /* Display properties */
  ${props => props.hidden && `
    display: none;
  `}

  ${props => sortBreakpointProps(props).map(breakpoint => mediaQuery[breakpoint]`

    // Generate gutter
    ${gutter.col(props, breakpoint)}

    // Generate column width
    ${columnWidth(props, breakpoint)}

  `)};
`;

Col.defaultProps = {
  order: 0,
  alignSelf: 'auto',
};

const alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

Col.PropTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,

  hidden: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
    }),
  ]),

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
};

Col.displayName = 'Col';

export default Col;
