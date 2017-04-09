import chai from '@/chai';

import defaultTheme from './defaultTheme';
import theme from './theme';

describe('theme', () => {
  it('should set the default theme if a custom theme is not provided', () => {
    chai.expect(theme()).to.eql(defaultTheme);
  });

  describe('overriding the default theme', () => {
    it('should not override theme if theme name is not "flexa"', () => {
      const customTheme = {
        theme: {
          grista: { columns: 16 },
        },
      };

      chai.expect(theme(customTheme)).to.eql(defaultTheme);
      chai.expect(theme(customTheme).columns).to.not.eql(16);
    });

    it('should only override values that have been passed in', () => {
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

      chai.expect(theme(customTheme)).to.eql(endTheme);
      chai.expect(theme(customTheme)).to.not.eql(defaultTheme);
    });

    it('should override whole theme if passed', () => {
      const customTheme = {
        theme: {
          flexa: {
            breakpoints: { lg: 65, md: 55, sm: 45, xs: 35 },
            columns: 10,
            gutter: { lg: 4, md: 3, sm: 2, xs: 1 },
          },
        },
      };

      chai.expect(theme(customTheme)).to.eql(customTheme.theme.flexa);
      chai.expect(theme(customTheme)).to.not.eql(defaultTheme);
    });
  });
});
