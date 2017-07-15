import { themeProvider, defaultTheme } from '../theme';

const {
  theme,
  breakpoints,
  breakpointsKeys,
} = themeProvider;


test('should set the default theme if a custom theme is not provided', () => {
  expect(theme()).toEqual(defaultTheme);
});

describe('overriding the default theme', () => {
  test('should not override theme if theme name is not "flexa"', () => {
    const customTheme = {
      theme: {
        grista: { columns: 16 },
      },
    };

    expect(theme(customTheme)).toEqual(defaultTheme);
    expect(theme(customTheme).columns).not.toEqual(16);
  });

  test('should only override values that have been passed in', () => {
    const customTheme = {
      theme: {
        flexa: { columns: 16 },
      },
    };

    const endTheme = {
      breakpoints: { lg: 60, md: 48, sm: 30, xs: 0 },
      columns: 16,
      gutter: { lg: 1, md: 1, sm: 0.5, xs: 0.5 },
    };

    expect(theme(customTheme)).toEqual(endTheme);
    expect(theme(customTheme)).not.toEqual(defaultTheme);
  });

  test('should override whole theme if passed', () => {
    const customTheme = {
      theme: {
        flexa: {
          breakpoints: { lg: 65, md: 55, sm: 45, xs: 35 },
          columns: 10,
          gutter: { lg: 4, md: 3, sm: 2, xs: 1 },
        },
      },
    };

    expect(theme(customTheme)).toEqual(customTheme.theme.flexa);
    expect(theme(customTheme)).not.toEqual(defaultTheme);
  });
});

describe('breakpoint method', () => {
  const customTheme = {
    theme: { flexa: { breakpoints: { lg: 65, md: 55, sm: 45, xs: 35 } } },
  };

  test('should return breakpoints of custom theme', () => {
    expect(breakpoints(customTheme)).toEqual(
      { lg: 65, md: 55, sm: 45, xs: 35 },
    );
  });

  test('should return custom breakpoints of custom theme with additional breakpoints', () => {
    const customBreakpoints = {
      theme: { flexa: { breakpoints: { lg: 65, md: 55, sm: 45, xs: 35, xl: 90, xxl: 120 } } },
    };
    expect(breakpoints(customBreakpoints)).toEqual(
      { lg: 65, md: 55, sm: 45, xl: 90, xs: 35, xxl: 120 },
    );
  });

  test('should return default breakpoints if no theme is provided', () => {
    expect(breakpoints()).toEqual(defaultTheme.breakpoints);
  });
});

describe('breakpointsKeys method', () => {
  const customTheme = {
    theme: { flexa: { breakpoints: { md: 55, lg: 65, xs: 35, sm: 45 } } },
  };

  test('should return breakpoints keys of custom theme', () => {
    expect(breakpointsKeys(customTheme)).toEqual(['xs', 'sm', 'md', 'lg']);
  });

  test('should return custom breakpoints of custom theme with additional breakpoints', () => {
    const customBreakpoints = {
      theme: { flexa: { breakpoints: { lg: 65, md: 55, sm: 45, xs: 35, xl: 90, xxl: 120 } } },
    };
    expect(breakpointsKeys(customBreakpoints)).toEqual(
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    );
  });

  test('should return default breakpoints if no theme is provided', () => {
    expect(breakpointsKeys()).toEqual(Object.keys(defaultTheme.breakpoints));
  });
});
