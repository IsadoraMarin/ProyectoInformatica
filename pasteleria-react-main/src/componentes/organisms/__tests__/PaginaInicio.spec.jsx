import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PaginaInicio from '../PaginaInicio';

describe('PaginaInicio organism', () => {
  it('renders Productos section', () => {
    render(
      <MemoryRouter>
        <PaginaInicio />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Productos/i })).toBeDefined();
  });
});
