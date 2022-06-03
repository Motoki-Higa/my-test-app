import React from 'react';
import { render, screen } from '@testing-library/react';
import AsyncUnitTest from '.';

// ref: https://www.youtube.com/watch?v=V2wWLM8VX5k
it('renders AsyncUnitTest properly', async () => {
  render(<AsyncUnitTest />);
  const dataItem = await screen.findByTestId('dogData');
  expect(dataItem).toBeInTheDocument();
});