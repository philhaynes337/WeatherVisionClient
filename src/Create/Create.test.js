import { render, screen } from '@testing-library/react';
import Create from './Create';

test('renders Create Component', () => {
  render(<Create />);
  const linkElement = screen.getByText(/Create/i);
  expect(linkElement).toBeInTheDocument();
});