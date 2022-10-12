import { fireEvent, render, screen } from '@testing-library/react';
import NormalUnitTest from '.';

/**
 * This is a standard UNIT TEST to test users interaction
 */
describe('Normal unit test', () => {
  render(<NormalUnitTest />);

  it('should show proper text when clicked', () => {
    const button = screen.getByRole('button')

    expect(screen.getByText(/Not clicked yet/i)).toBeInTheDocument()

    fireEvent.click(button)

    expect(screen.getByText(/Clicked/i)).toBeInTheDocument()
    expect(screen.queryByText(/Not clicked yet/i)).not.toBeInTheDocument()
  })
})