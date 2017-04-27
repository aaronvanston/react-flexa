import sortBreakpoints from './sortBreakpoints';

test('should order breakpoint props from smallest to largest value', () => {
  const mockBreakpoints = { lg: 30, sm: 0, xs: 1, md: 20 };
  expect(sortBreakpoints(mockBreakpoints)).toEqual(['sm', 'xs', 'md', 'lg']);
});
