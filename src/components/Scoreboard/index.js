import React from 'react';
import './Scoreboard.css'


function Scoreboard(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <span>World of Water Towers</span>
      </li>
    </ul>
    <span className="score-card">
      Score: 0 | Top Score: 0
    </span>
  </div>
</nav>
    );
};

export default Scoreboard;