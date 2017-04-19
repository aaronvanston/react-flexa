import columnWidth from './columnWidth';

const mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };

test('should generate a percentage based on collumn size', () => {
  expect(columnWidth(mockProps, 'lg')).toEqual('50%');
  expect(columnWidth(mockProps, 'md')).toEqual('25%');
  expect(columnWidth(mockProps, 'sm')).toEqual('16.666666666666664%');
});

test('should normalise negative numbers', () => {
  expect(columnWidth(mockProps, 'xs')).toEqual('8.333333333333332%');
});
