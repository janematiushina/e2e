import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a paragraph', () => {
  render(<App />);
  const element = screen.getByText(/Cypress example/i);
  expect(element).toBeInTheDocument();
});
