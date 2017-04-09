import chai from '@/chai';

import mediaQuery from './mediaQuery';

describe('mediaQuery', () => {
  it('should generate a media query for lg breakpoint', () => {
    const query = (mediaQuery.lg`color: red`).join('');
    chai.expect(query).to.contain('@media (min-width: 60rem)');
    chai.expect(query).to.contain('color: red');
  });

  it('should generate a media query for md breakpoint', () => {
    const query = (mediaQuery.md`color: blue`).join('');
    chai.expect(query).to.contain('@media (min-width: 48rem)');
    chai.expect(query).to.contain('color: blue');
  });

  it('should generate a media query for sm breakpoint', () => {
    const query = (mediaQuery.sm`color: green`).join('');
    chai.expect(query).to.contain('@media (min-width: 30rem)');
    chai.expect(query).to.contain('color: green');
  });

  it('should not generate a media query for xs breakpoint', () => {
    const query = (mediaQuery.xs`color: yellow`).join('');
    chai.expect(query).to.not.contain('@media (min-width: 0rem)');
    chai.expect(query).to.contain('color: yellow');
  });
});
