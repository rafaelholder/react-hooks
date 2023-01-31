/* eslint-disable no-unused-vars */
import P from 'prop-types';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../../App.css';

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

const UseMemoPosts = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  //UseRef don't re-render the page/component
  const counter = useRef(0);
  //Count the many times the page render

  // Component did mount. Searching posts in json placeholder
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
};

export default UseMemoPosts;
