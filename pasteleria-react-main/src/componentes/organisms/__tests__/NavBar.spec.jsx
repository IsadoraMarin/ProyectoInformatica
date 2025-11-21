import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar organism', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText(/inicio/i)).toBeDefined();
    expect(screen.getByText(/catálogo/i)).toBeDefined();
    expect(screen.getByText(/extras/i)).toBeDefined();
  });
});
