import map from 'lodash/map';
import sortBy from 'lodash/sortBy';

const sortBreakpoints = (breakpoints) => {
  const mappedBreakpoints = map(breakpoints, (value, key) => ({ key, value }));
  const sortedBreakpoints = sortBy(mappedBreakpoints, 'value');

  return map(sortedBreakpoints, value => (value.key));
};

export default sortBreakpoints;
