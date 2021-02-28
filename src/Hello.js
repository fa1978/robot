import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './Hello.css' ;

function Hello(props) {
  return (
    <div className="f1 tc">
      <h1>Wellcome To First React App</h1>
      <p>{props.greeting}</p>
    </div>
  );
}


export default Hello;