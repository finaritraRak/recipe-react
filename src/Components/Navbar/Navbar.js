import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
   
    <Link className="navbar-brand" to="/">gallery</Link>  
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
   </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
            
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/article">article</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/gallery">gallery</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/blog">blog</Link>
        </li>
    </ul>

    </div> 
</nav>

  )
}
