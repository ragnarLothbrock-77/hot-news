import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterState = useSelector(getCounterValue)
  const dispatch = useDispatch();
  const increment = () => { dispatch(counterActions.increment()) }
  const decrement = () => { dispatch(counterActions.decrement()) }

  return (
    <div>
      <h1 data-testid="value">{counterState}</h1>
      <Button
        data-testid="increment-button"
        onClick={increment}
        variant={ButtonVariant.ROUND}
      >+</Button>
      <Button
        data-testid="decrement-button"
        onClick={decrement}
        variant={ButtonVariant.ROUND}>-</Button>
    </div>
  );
}
