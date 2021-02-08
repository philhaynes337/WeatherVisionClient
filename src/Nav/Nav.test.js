import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders Nav Component', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});