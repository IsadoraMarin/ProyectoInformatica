import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Seguimiento from '../Seguimiento';

describe('Seguimiento organism', () => {
  it('renders tracking info', () => {
    render(
      <MemoryRouter>
        <Seguimiento />
      </MemoryRouter>
    );
    expect(screen.getByText(/Número de Pedido/i)).toBeDefined();
  });
});
