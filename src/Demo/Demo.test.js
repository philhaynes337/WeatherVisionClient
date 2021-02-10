import { render, screen } from '@testing-library/react';
import Demo from './Demo';

test('renders Demo Component', () => {
  render(<Demo />);
  const linkElement = screen.getByText(/Demo/i);
  expect(linkElement).toBeInTheDocument();
});