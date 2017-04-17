import mediaQuery from './mediaQuery';

describe('mediaQuery', () => {
  it('should generate a media query for lg breakpoint', () => {
    const query = (mediaQuery.lg`color: red`).join('');
    expect(query).toContain('@media (min-width: 60rem)');
    expect(query).toContain('color: red');
  });

  it('should generate a media query for md breakpoint', () => {
    const query = (mediaQuery.md`color: blue`).join('');
    expect(query).toContain('@media (min-width: 48rem)');
    expect(query).toContain('color: blue');
  });

  it('should generate a media query for sm breakpoint', () => {
    const query = (mediaQuery.sm`color: green`).join('');
    expect(query).toContain('@media (min-width: 30rem)');
    expect(query).toContain('color: green');
  });

  it('should not generate a media query for xs breakpoint', () => {
    const query = (mediaQuery.xs`color: yellow`).join('');
    expect(query).not.toContain('@media (min-width: 0rem)');
    expect(query).toContain('color: yellow');
  });
});
