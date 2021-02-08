import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Weather Vision/i);
  expect(linkElement).toBeInTheDocument();
});