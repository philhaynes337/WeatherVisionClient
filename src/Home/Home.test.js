import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});