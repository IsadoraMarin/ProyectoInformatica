import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar molecule', () => {
  it('calls onSearch with input value on submit', () => {
    const onSearch = jasmine.createSpy('onSearch');
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/buscar productos/i);
    fireEvent.change(input, { target: { value: 'torta' } });
    const btn = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(btn);
    expect(onSearch).toHaveBeenCalledWith('torta');
  });
});
