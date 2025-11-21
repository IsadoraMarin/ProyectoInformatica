import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalogo from '../Catalogo';

describe('Catalogo molecule', () => {
  it('renders a list of products', () => {
    render(
      <MemoryRouter>
        <Catalogo />
      </MemoryRouter>
    );
    // espera que al menos un producto esté renderizado
    const posibles = screen.getAllByText(/Torta|Mousse|Tiramisu|Empanada|Brownie|Galletas/i);
    expect(posibles.length).toBeGreaterThan(0);
  });
});
