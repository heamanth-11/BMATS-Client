import React from 'react';
import { Link } from "react-router-dom";
function Navbar(props) {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark ">
  <a class="navbar-brand " href="/">BMATS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">About</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;