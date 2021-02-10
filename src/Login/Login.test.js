import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders Nav Component', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});