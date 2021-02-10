import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About Component', () => {
  render(<About />);
  const linkElement = screen.getByText(/About Component/i);
  expect(linkElement).toBeInTheDocument();
});
