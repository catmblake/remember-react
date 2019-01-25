import React from 'react';
import './style.css'


const Jumbotron = props =>
  (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Click any tower to score a point, but don't click the same one twice!</h1>
      <p class="lead">{props.message}</p>
    </div>
  </div>
  );

export default Jumbotron;