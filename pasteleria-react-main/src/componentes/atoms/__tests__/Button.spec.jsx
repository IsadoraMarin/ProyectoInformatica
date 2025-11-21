import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button atom', () => {
  it('renders children and responds to click', () => {
    const onClick = jasmine.createSpy('onClick');
    render(<Button onClick={onClick}>Comprar</Button>);
    const btn = screen.getByRole('button', { name: /comprar/i });
    expect(btn).toBeDefined();
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});
