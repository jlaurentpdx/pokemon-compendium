import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a load state, then a filtered list of Pokemon', async () => {
  const { container } = render(<App />);

  screen.getByText(/Pokédex Compendium/i);
  await screen.findByText('abomasnow');

  expect(container).toMatchSnapshot();
});
