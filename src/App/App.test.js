import { render, screen } from '@testing-library/react';
import App from '.';

// https://stackoverflow.com/questions/70805929/how-to-fix-error-usehref-may-be-used-only-in-the-context-of-a-router-compon
import { MemoryRouter } from 'react-router-dom';

test('renders App and child components properly', () => {
  const {container} = render(<App />, {wrapper: MemoryRouter});
  const Header = container.querySelector('header'); 
  expect(Header).toBeInTheDocument();
});

/**
 * Note: This component doesn't need a test since there is no user interaction.
 * 
 * You could also get the header component by below, but not advisable.
 * Refer to https://testing-library.com/docs/queries/about/#priority,
 * it tells that using getByTestId() is sort of last resort.
 * 
 * const Header = screen.getByTestId('header'); 
 */
