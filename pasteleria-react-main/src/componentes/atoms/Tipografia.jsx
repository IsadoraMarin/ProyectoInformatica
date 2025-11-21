import React from 'react';

// Componente simple para tipografías reutilizables
export const H1 = ({ children, className = '' }) => (
  <h1 className={`display-5 ${className}`}>{children}</h1>
);

export const H2 = ({ children, className = '' }) => (
  <h2 className={`h4 ${className}`}>{children}</h2>
);

export const Paragraph = ({ children, className = '' }) => (
  <p className={`lead ${className}`}>{children}</p>
);

export default { H1, H2, Paragraph };
