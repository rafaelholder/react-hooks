import { createContext, useContext, useState } from 'react';
import '../../App.css';

const globalState = {
  title: 'title context',
  body: 'Click here in the body of context state',
  counter: 0,
};
const GlobalContext = createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body} {counter}
    </p>
  );
};

const ContextHook = () => {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
};

export default ContextHook;
