import { PropTypes } from 'react';

const Col = '';

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
