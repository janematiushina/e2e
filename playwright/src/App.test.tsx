import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('rs a paragraph', () => {
  render(<App />);
  const element = screen.getByText(/Playwright example/i);
  expect(element).toBeInTheDocument();
});
