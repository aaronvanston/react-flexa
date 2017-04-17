import { PropTypes } from 'react';
import styled from 'styled-components';

const Col = styled.div`
  /* Initial components properties */
  box-sizing: border-box;
  flex: 0 0 auto;
  display: block;

  /* Flexbox properties */
  /* TODO: integrate responsive values via object */
  order: ${props => props.order};
  align-self: ${props => props.alignSelf};

  /* Guttter properties */
  /* TODO: create gutter helper function */
  padding-right: ${props => props.gutter};
  padding-left: ${props => props.gutter};

  flex-basis: 0; /* (100 / columnsCount * value)% */
  max-width: 0; /* (100 / columnsCount * value)% */

  /* Display properties */
  ${props => props.hidden && `
    display: none;
  `}
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
