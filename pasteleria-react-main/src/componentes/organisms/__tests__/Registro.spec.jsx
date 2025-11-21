import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Registro from '../Registro';

describe('Registro organism', () => {
  it('renders registration fields', () => {
    render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Nombre de usuario/i)).toBeDefined();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeDefined();
    expect(screen.getByLabelText(/Contraseña/i)).toBeDefined();
  });
});
