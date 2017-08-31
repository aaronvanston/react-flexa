import columnWidth, { percentage, isHidden, isAuto, display } from './columnWidth';

const mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };

describe('percentage', () => {
  test('should generate a percentage based on collumn size', () => {
    expect(percentage(mockProps, 'lg')).toEqual(50);
    expect(percentage(mockProps, 'md')).toEqual(0);
    expect(percentage(mockProps, 'sm')).toEqual(16.666666666666664);
  });

  test('should normalise negative numbers', () => {
    expect(percentage(mockProps, 'xs')).toEqual(8.333333333333332);
  });
});

describe('isHidden', () => {
  test('should return hidden if a given breakpoint is explicitly "0" or "hidden"', () => {
    expect(isHidden({ xs: 0 }, 'xs')).toEqual(true);
    expect(isHidden({ xs: 'hidden' }, 'xs')).toEqual(true);
    expect(isHidden({ xs: undefined }, 'xs')).toEqual(false);
    expect(isHidden({ xs: 12 }, 'xs')).toEqual(false);
  });
});

describe('isAuto', () => {
  test('should return flex: 1 if a given property is explicitly "auto" if a given breakpoint is explicitly set to auto', () => {
    const autoGrowMockProps = { xs: -1, sm: 2, md: 'auto', lg: 6 };
    const width = columnWidth(autoGrowMockProps, 'md').join('');
    expect(isAuto({ xs: 'auto' }, 'xs')).toEqual(true);
    expect(width).toContain('flex: 1');
  });
});

describe('display', () => {
  test('should return block if no display is set', () => {
    const value = display(mockProps, 'lg').join('');
    expect(value).toContain('display: block');
  });

  test('should return display prop if set as string', () => {
    const value = display({ sm: 1, display: 'flex' }, 'sm').join('');
    expect(value).toContain('display: flex');
  });

  test('should return null prop if display is set to current breakpoint', () => {
    const value = display({ sm: 1, display: { sm: 'flex' } }, 'sm');
    expect(value).toEqual(null);
  });

  test('should return display prop if display does not have matching breakpoint', () => {
    const value = display({ sm: 1, display: { md: 'flex' } }, 'sm').join('');
    expect(value).toContain('display: block');
  });
});

describe('columnWidth', () => {
  test('should generate column width css', () => {
    const width = columnWidth(mockProps, 'sm').join('');
    expect(width).toContain('flex-basis: 16.666666666666664%;');
    expect(width).toContain('max-width: 16.666666666666664%;');
  });

  test('should return nothing if breakpoint does not exist', () => {
    const width = columnWidth(mockProps, 'xl');
    expect(width).toEqual(null);
  });

  test('should not return display:block', () => {
    const displayProps = { xs: 1, display: 'flex' };
    const width = columnWidth(displayProps, 'xs');
    expect(width).not.toContain('display: block');
  });

  test('should only return display:block if display has not alreayd been set', () => {
    const displayProps = { xs: 1 };
    const width = columnWidth(displayProps, 'xs');
    expect(width).toContain('display: block');
  });

  test('should return "display:none" if breakpoint is explicity set to 0', () => {
    const width = columnWidth(mockProps, 'md').join('');
    expect(width).toContain('display: none');
  });

  test('should return "display:none" if breakpoint is explicity set to "hidden"', () => {
    const hiddenMockProps = { xs: -1, sm: 2, md: 'hidden', lg: 6 };
    const width = columnWidth(hiddenMockProps, 'md').join('');
    expect(width).toContain('display: none');
  });
});
