import { gutterWidth, row, col } from './gutter';

describe('gutterWidth', () => {
  test('should use default config if no gutter is provided', () => {
    const mockProps = { xs: 1, lg: 4 };
    expect(gutterWidth(mockProps, 'sm')).toEqual(0.5);
    expect(gutterWidth(mockProps, 'lg')).toEqual(1);
  });

  test('should use gutter value in props over config', () => {
    const mockProps = { xs: 1, lg: 4, gutter: 6 };
    expect(gutterWidth(mockProps, 'sm')).toEqual(6);
    expect(gutterWidth(mockProps, 'lg')).toEqual(6);
  });

  test('should use breakpoint within gutter object if provided', () => {
    const mockProps = { xs: 1, lg: 4, gutter: { sm: 7, lg: 9 } };
    expect(gutterWidth(mockProps, 'sm')).toEqual(7);
    expect(gutterWidth(mockProps, 'lg')).toEqual(9);
  });

  test('should use default breakpoint for if a value is not used within the object', () => {
    const mockProps = { xs: 1, lg: 4, gutter: { sm: 7, lg: 9 } };
    expect(gutterWidth(mockProps, 'xs')).toEqual(0.5);
    expect(gutterWidth(mockProps, 'sm')).toEqual(7);
    expect(gutterWidth(mockProps, 'md')).toEqual(1);
    expect(gutterWidth(mockProps, 'lg')).toEqual(9);
  });

  test('should work with strings and numbers', () => {
    const mockProps = { xs: 1, lg: 4, gutter: { sm: '12rem', lg: 42 } };
    expect(gutterWidth(mockProps, 'sm')).toEqual('12rem');
    expect(gutterWidth(mockProps, 'lg')).toEqual(42);
  });
});

describe('row', () => {
  test('should generate gutter css', () => {
    const mockProps = { xs: 1, gutter: { sm: 12 } };
    const rowGutter = row(mockProps, 'sm').join('');
    expect(rowGutter).toContain('margin-right: calc(-12rem / 2);');
    expect(rowGutter).toContain('margin-left: calc(-12rem / 2);');
  });

  test('should generate gutter css included unit', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const rowGutter = row(mockProps, 'sm').join('');
    expect(rowGutter).toContain('margin-right: calc(-12px / 2);');
    expect(rowGutter).toContain('margin-left: calc(-12px / 2);');
  });

  test('should return theme value if breakpoint does not exist in gutter', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const rowGutter = row(mockProps, 'lg').join('');
    expect(rowGutter).toContain('margin-right: calc(-1rem / 2);');
    expect(rowGutter).toContain('margin-left: calc(-1rem / 2);');
  });

  test('should return null if breakpoint does not exist in theme and gutter', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const rowGutter = row(mockProps, 'xlg');
    expect(rowGutter).toEqual(null);
  });
});

describe('col', () => {
  test('should generate gutter css', () => {
    const mockProps = { xs: 1, gutter: { sm: 12 } };
    const colGutter = col(mockProps, 'sm').join('');
    expect(colGutter).toContain('padding-right: calc(12rem / 2);');
    expect(colGutter).toContain('padding-left: calc(12rem / 2);');
  });

  test('should generate gutter css included unit', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const colGutter = col(mockProps, 'sm').join('');
    expect(colGutter).toContain('padding-right: calc(12px / 2);');
    expect(colGutter).toContain('padding-left: calc(12px / 2);');
  });

  test('should return null if breakpoint does not exist in gutter', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const colGutter = col(mockProps, 'lg').join('');
    expect(colGutter).toContain('padding-right: calc(1rem / 2);');
    expect(colGutter).toContain('padding-left: calc(1rem / 2);');
  });

  test('should return null if breakpoint does not exist in theme and gutter', () => {
    const mockProps = { xs: 1, gutter: { sm: '12px' } };
    const colGutter = col(mockProps, 'xlg');
    expect(colGutter).toEqual(null);
  });
});
