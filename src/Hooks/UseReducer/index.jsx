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
    case 'change': {
      console.log('Called change with', action.payload);
      alert('Called change with', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('call inverter');
      alert('call inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  alert('None action found...');
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
            type: 'change',
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
