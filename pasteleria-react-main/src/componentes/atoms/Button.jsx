import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => (
  <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
