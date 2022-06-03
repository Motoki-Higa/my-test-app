import { render, screen } from '@testing-library/react';
import App from '.';

// https://stackoverflow.com/questions/70805929/how-to-fix-error-usehref-may-be-used-only-in-the-context-of-a-router-compon
import { MemoryRouter } from 'react-router-dom';

test('renders App and child components properly', () => {
  render(<App />, {wrapper: MemoryRouter});
  const Header = screen.getByTestId('header');
  expect(Header).toBeInTheDocument();
});
