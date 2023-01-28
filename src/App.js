import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const eventFn = () => {
    console.log('h1 clicado');
  };

  // HOOKS RULES https://reactjs.org/docs/hooks-rules.html //
  //////////////////////////////////////////////////////////

  // // ComponentDidUpdate - execute every time a component update
  // useEffect(() => {
  //   console.log('component Did Update');
  // });

  // // ComponentDidMount - execute every time a component is mounted
  // useEffect(() => {
  //   console.log('component Did Mount');
  // }, []);

  // ComponentDidMount - execute every time a dependencies is changed
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //ComponentWillUnmount - Clear the dirty saved in memory
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, [counter]);

  const handleClick = () => {
    // this.setState({ reverse: !reverse });
    //Normal hook
    setReverse(!reverse);
  };
  const handleIncrement = () => {
    //CallBack function
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Counter: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
        <button type="button" onClick={handleIncrement}>
          increment {counter}
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
