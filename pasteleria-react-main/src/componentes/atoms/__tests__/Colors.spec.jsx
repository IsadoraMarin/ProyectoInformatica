import colors from '../Colors';

describe('Colors tokens', () => {
  it('exports primary and other tokens', () => {
    expect(colors).toBeDefined();
    expect(colors.primary).toBeDefined();
    expect(colors.secondary).toBeDefined();
    expect(colors.accent).toBeDefined();
  });
});
