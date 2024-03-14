import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import {
  componentRender
} from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  const user = userEvent.setup();
  const initialState = { counter: { value: 10 } }
  test('Counter initial value render test', () => {
    componentRender(<Counter />, { initialState })
    expect(screen.getByTestId('value')).toHaveTextContent('10');
  })

  test('Counter increment value test', async () => {
    componentRender(<Counter />, { initialState })
    user.click(await screen.findByTestId('increment-button'));
    await waitFor(() => {
      expect(screen.getByTestId('value')).toHaveTextContent('11');
    })
  })

  test('Counter decrement value test', async () => {
    componentRender(<Counter />, { initialState })
    userEvent.click(await screen.findByTestId('decrement-button'));
    await waitFor(() => {
      expect(screen.getByTestId('value')).toHaveTextContent('9');
    })
  })
});
