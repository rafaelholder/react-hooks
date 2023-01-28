/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import P from 'prop-types';
import './App.css';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';

// // React.memo has the same propose of useCallback
// const Button = ({ handleIncrementCounter }) => {
//   return (
//     <button onClick={() => handleIncrementCounter(1000)}> Increment +</button>
//   );
// };
// Button.propTypes = {
//   handleIncrementCounter: P.func,
// };

// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);

//   const reverseClass = reverse ? 'reverse' : '';

//   // HOOKS RULES https://reactjs.org/docs/hooks-rules.html //
//   //////////////////////////////////////////////////////////

//   // // ComponentDidUpdate - execute every time a component update
//   // useEffect(() => {
//   //   console.log('component Did Update');
//   // });

//   // // ComponentDidMount - execute every time a component is mounted
//   // useEffect(() => {
//   //   console.log('component Did Mount');
//   // }, []);

//   // ComponentDidMount - execute every time a dependencies is changed
//   // useEffect(() => {
//   //   document.querySelector('h1')?.addEventListener('click', eventFn);

//   //   //ComponentWillUnmount - Clear the dirty saved in memory
//   //   return () => {
//   //     document.querySelector('h1')?.removeEventListener('click', eventFn);
//   //   };
//   // }, [counter]);

//   const handleClick = () => {
//     // this.setState({ reverse: !reverse });
//     //Normal hook
//     setReverse(!reverse);
//   };
//   const handleIncrementCounter = useCallback((num) => {
//     setCounter((prevCounter) => {
//       prevCounter + num;
//     });
//   }, []);

//   const btn = useMemo(() => {
//     return <Button handleIncrementCounter={handleIncrementCounter} />;
//   }, [handleIncrementCounter]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <button type="button" onClick={handleClick}>
//           Reverse {reverseClass}
//         </button>

//         <h1>Counter: {counter}</h1>
//         {btn}
//       </header>
//     </div>
//   );
// }

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

const Post = ({ post, handleClick }) => {
  console.log('Son component render');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const inputRef = useRef(null); //UseRef dont re-render the page/component

  const counter = useRef(0); //Count the many times the page render

  console.log(' render!');

  // Component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    // Current is a useRef value.
    console.log(inputRef.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h6>Render: {counter.current}x</h6>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>There are no posts.</p>}
    </div>
  );
}

export default App;
