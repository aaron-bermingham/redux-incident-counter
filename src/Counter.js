import { SetCounter } from './SetCounter';
import { useCounter } from './useCounter';

export const Counter = () => {
  const incident = 'Incident';
  // get state from store using useSelector hook
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();

  /* refactor to avoid calling dispatch on each button onClick, returns an object whose 
   values are action creators, into an object with the same keys, but with every action 
   creator wrapped into a dispatch call so they may be invoked directly.  */
  //const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  // same as above but using useActions custom hook
  // const actions = useActions({
  //   increment,
  //   decrement,
  //   set
  // });

  const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
