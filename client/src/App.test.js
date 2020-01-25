import React from 'react';
import {render} from '@testing-library/react'
import App from './App';

test("it renders without crashing", () => {
  render(<App />);
});

test('it displays the Dark/Light Mode Button', () => {
  const container = render(<App />);
  container.getByTestId("dark-mode-button");
});
