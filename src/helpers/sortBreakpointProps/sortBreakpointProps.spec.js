import { themeProvider } from '~/theme';

import sortBreakpointProps from './sortBreakpointProps';

const { breakpoints } = themeProvider;

describe('sortBreakpointProps', () => {
  it('should remove props that are not a valid breakpoint', () => {
    const mockProps = { xs: 1, sm: 2, md: 3, lg: 4, xlg: 5 };
    expect(sortBreakpointProps(mockProps)).toEqual(breakpoints);
  });

  it('should order breakpoint props from smallest to largest value', () => {
    const mockProps = { lg: 5, sm: 2, xs: 3, md: 4 };
    expect(sortBreakpointProps(mockProps)).toEqual(['xs', 'sm', 'md', 'lg']);
  });
});
