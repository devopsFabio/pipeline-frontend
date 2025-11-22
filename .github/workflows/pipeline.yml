import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fabio Prado de Araújo title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Fabio Prado de Araújo/i);
  expect(titleElement).toBeInTheDocument();
});