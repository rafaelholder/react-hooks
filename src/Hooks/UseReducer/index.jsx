/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import '../../App.css';

const globalState = {
  title: 'title ctx',
  body: 'Body ctx',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('call inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('None action found...');
  return { ...state };
};

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>
        NO ACTION
      </button>
    </div>
  );
}

export default ReducerHook;
