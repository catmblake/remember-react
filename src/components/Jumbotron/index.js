import React from 'react';
import './style.css'


const Jumbotron = props =>
  (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Click any tower to score a point, but don't click the same one twice!</h1>
      <p className="lead">{props.message}</p>
    </div>
  </div>
  );

export default Jumbotron;