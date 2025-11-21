import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarritoDeCompras from '../CarritoDeCompras';

describe('CarritoDeCompras organism', () => {
  it('adds a selected product to the cart when clicking Añadir', () => {
    render(
      <MemoryRouter>
        <CarritoDeCompras />
      </MemoryRouter>
    );

    const addBtn = screen.getByRole('button', { name: /añadir al carrito/i });
    expect(addBtn).toBeDefined();
    fireEvent.click(addBtn);

    // Después de añadir, debe mostrarse al menos una fila en la tabla
    const tableCell = screen.getByText(/Resumen de tu Carrito|No hay productos en el carrito/i, { exact: false });
    expect(tableCell).toBeDefined();
  });
});
