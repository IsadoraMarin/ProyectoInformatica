import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer organism', () => {
  it('renders footer links', () => {
    render(<Footer />);
    expect(screen.getAllByText(/lorem/i).length).toBeGreaterThan(0);
  });
});
