import { PropTypes } from 'react';
import styled from 'styled-components';

import { themeProvider } from '~/theme';
import { mediaQuery } from '~/helpers';

const Row = styled.div`
  /* Initial components properties */
  box-sizing: border-box;

  /* Flexbox properties */
  /* TODO: integrate responsive values via object */
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};

  /* Guttter properties */
  /* TODO: create gutter helper function */
  margin-right: ${props => props.gutter};
  margin-left: ${props => props.gutter};

  /* Display properties */
  ${props => props.hidden && `
    display: none;
  `}

  ${props => themeProvider.breakpoints.map(breakpoint => mediaQuery[breakpoint]`

  `)
  }
`;

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
};

const displayOptions = ['flex', 'flex-inline'];
const flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
const flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch '];

Row.PropTypes = {
  hidden: PropTypes.bool,

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
};

Row.displayName = 'Row';

export default Row;
