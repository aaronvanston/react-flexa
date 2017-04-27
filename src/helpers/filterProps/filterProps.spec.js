import filterProps from './filterProps';

test('should filter props from supplied object', () => {
  const mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };
  const propsToRemove = { xs: '', display: '' };

  expect(filterProps(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6 });
});

test('should ignore nested objects in second argument, propsToRemove', () => {
  const mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };
  const propsToRemove = { xs: 'foo', display: 'sm' };

  expect(filterProps(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6 });
});

test('should not filter out safe props such as children', () => {
  const mockProps = { xs: -1, sm: 2, md: 0, lg: 6, children: { foo: 'bar' } };
  const propsToRemove = { xs: 'foo', display: 'bar', children: 'baz' };

  expect(filterProps(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6, children: { foo: 'bar' } });
});
