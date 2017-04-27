import _ from 'lodash';

const sortBreakpoints = (breakpoints) => {
  const mappedBreakpoints = _.map(breakpoints, (value, key) => ({ key, value }));
  const sortedBreakpoints = _.sortBy(mappedBreakpoints, 'value');

  return _.map(sortedBreakpoints, value => (value.key));
};

export default sortBreakpoints;
