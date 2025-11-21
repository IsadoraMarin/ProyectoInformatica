import React from 'react';
import { render, screen } from '@testing-library/react';
import { H1, H2, Paragraph } from '../Typography';

describe('Typography atoms', () => {
  it('renders H1, H2 and Paragraph with children', () => {
    render(
      <div>
        <H1>Title</H1>
        <H2>Subtitle</H2>
        <Paragraph>Text</Paragraph>
      </div>
    );

    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Subtitle')).toBeDefined();
    expect(screen.getByText('Text')).toBeDefined();
  });
});
