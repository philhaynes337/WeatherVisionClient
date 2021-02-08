import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Foot Notes/i);
  expect(linkElement).toBeInTheDocument();
});