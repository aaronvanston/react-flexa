import { themeProvider, defaultTheme } from '../theme';

const { theme, breakpoints } = themeProvider;


test('should set the default theme if a custom theme is not provided', () => {
  expect(theme()).toEqual(defaultTheme);
  expect(breakpoints).toEqual(Object.keys(defaultTheme.breakpoints));
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
      gutter: { lg: 2, md: 2, sm: 1, xs: 1 },
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
