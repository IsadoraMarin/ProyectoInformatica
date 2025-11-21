import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sesion from '../Sesion';

describe('Sesion organism', () => {
  it('renders login form and submit', () => {
    render(
      <MemoryRouter>
        <Sesion />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /iniciar sesión/i })).toBeDefined();
    const submit = screen.getByRole('button', { name: /iniciar sesión/i });
    expect(submit).toBeDefined();
  });
});
