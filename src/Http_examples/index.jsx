/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../App.css';

//https://sujeitoprogramador.com/rn-api/?api=posts
const Http_example = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        .then((response) => response.json())
        .then((jsonResp) => {
          console.log(jsonResp);
          setNutri(jsonResp);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="Container">
      <strong>React Nutri</strong>
      <h4>
        {nutri.map((post) => {
          return (
            <article key={post.id}>
              <li>{post.titulo}</li>
              <img className="img" src={post.capa} alt={post.titulo} />
              <h5>{post.subtitulo}</h5>
            </article>
          );
        })}
      </h4>
    </div>
  );
};

export default Http_example;
