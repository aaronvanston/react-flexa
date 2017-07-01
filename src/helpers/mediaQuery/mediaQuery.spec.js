import mediaQuery from './mediaQuery';

test('should generate a media query for lg breakpoint', () => {
  const query = (mediaQuery(60, 'color: red')).join('');
  expect(query).toContain('@media (min-width: 60rem)');
  expect(query).toContain('color: red');
});

test('should not generate a media query for xs breakpoint', () => {
  const query = (mediaQuery(0, 'color: yellow')).join('');
  expect(query).not.toContain('@media (min-width: 0rem)');
  expect(query).toContain('color: yellow');
});
