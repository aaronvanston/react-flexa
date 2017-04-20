import CSSProperty, { getPropertyValue } from './CSSProperty';


describe('getPropertyValue', () => {
  test('should generate css value from string', () => {
    const mockProps = { alignSelf: 'center' };
    expect(getPropertyValue(mockProps, 'xs', 'align-self')).toEqual('center');
  });

  test('should not generate css value from string if not provided on props', () => {
    const mockProps = { alignSelf: 'center' };
    expect(getPropertyValue(mockProps, 'xs', 'order')).toEqual(null);
  });

  test('should generate css value from string if breakpoint is == xs', () => {
    const mockProps = { alignSelf: 'center' };
    expect(getPropertyValue(mockProps, 'xs', 'align-self')).toEqual('center');
  });

  test('should not generate css value from string if breakpoint is > xs', () => {
    const mockProps = { alignSelf: 'center' };
    expect(getPropertyValue(mockProps, 'md', 'align-self')).toEqual(null);
  });

  test('should generate css value from object if it matches current breakpoint', () => {
    const mockProps = { alignSelf: { lg: 'center' } };
    expect(getPropertyValue(mockProps, 'lg', 'align-self')).toEqual('center');
  });

  test('should not generate css value from object if does not match current breakpoint', () => {
    const mockProps = { alignSelf: { sm: 'center' } };
    expect(getPropertyValue(mockProps, 'lg', 'align-self')).toEqual(null);
  });
});

describe('CSSProperty', () => {
  test('should generte css for valid property', () => {
    const mockProps = { alignSelf: 'center' };
    expect(CSSProperty(mockProps, 'xs', 'align-self').join('')).toContain('align-self: center');
  });

  test('should not generte css for invalid property', () => {
    const mockProps = { alignSelf: 'center' };
    expect(CSSProperty(mockProps, 'xs', 'order')).toEqual(null);
  });

  test('should not generte css nested property', () => {
    const mockProps = { alignSelf: { sm: 'center' } };
    expect(CSSProperty(mockProps, 'sm', 'align-self').join('')).toContain('align-self: center');
  });
});
