import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set, increment, decrement } from './actions';
import { SetCounter } from './SetCounter';
import { useActions } from './useActions';

export const Counter = () => {
  const incident = 'Incident';
  // get state from store using useSelector hook
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  /* refactor to avoid calling dispatch on each button onClick, returns an object whose 
   values are action creators, into an object with the same keys, but with every action 
   creator wrapped into a dispatch call so they may be invoked directly.  */
  //const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  // same as above but using useActions custom hook
  const actions = useActions({
    increment,
    decrement,
    set
  });

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
