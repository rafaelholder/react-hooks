import { useCallback, useMemo, useState } from 'react';
import P from 'prop-types';

//React.memo has the same propose of useCallback
const Button = ({ handleIncrementCounter }) => {
  return (
    <button onClick={() => handleIncrementCounter(1000)}> Increment +</button>
  );
};
Button.propTypes = {
  handleIncrementCounter: P.func,
};

function UseCallback_ReactMemo() {
  const [counter, setCounter] = useState(0);

  // HOOKS RULES https://reactjs.org/docs/hooks-rules.html //
  //////////////////////////////////////////////////////////

  const handleIncrementCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const btn = useMemo(() => {
    return <Button handleIncrementCounter={handleIncrementCounter} />;
  }, [handleIncrementCounter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        {btn}
        <p> Counter using useCallback and React.memo</p>
      </header>
    </div>
  );
}
export default UseCallback_ReactMemo;
