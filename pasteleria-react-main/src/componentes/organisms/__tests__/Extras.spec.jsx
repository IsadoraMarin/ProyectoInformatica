import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Extras from '../Extras';

describe('Extras organism', () => {
  it('renders Extras heading', () => {
    render(
      <MemoryRouter>
        <Extras />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Extras/i })).toBeDefined();
  });
});
