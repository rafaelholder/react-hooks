import './App.css';
import React from 'react';
import ContextHook from './Hooks/UseContext';
import ReducerHook from './Hooks/UseReducer';
import Reducer_Context from './Hooks/Reduce_+_Context';
import MyHook from './Hooks/CreateMyHook';
import UseMemoPosts from './Hooks/UseRef';
import UseState from './Hooks/UseState';
import UseCallback_ReactMemo from './Hooks/UseCallback_ReactMemo';

function App() {
  console.log(' render!');

  return (
    <section className="container">
      <div className="App">
        <UseState />
      </div>
      <div className="App">
        <UseCallback_ReactMemo />
      </div>
      <div className="App">
        <ContextHook />
      </div>
      <div className="App">
        <ReducerHook />
      </div>
      <div className="App">
        <Reducer_Context />
      </div>
      <div className="App">
        <MyHook />
      </div>
      <div className="App">
        <UseMemoPosts />
      </div>
    </section>
  );
}

export default App;
