import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TypeScript Tutorial header', () => {
  render(<App />);
  const headerElement = screen.getByText(/TypeScript Tutorial 2025/i);
  expect(headerElement).toBeInTheDocument();
});
