import React from 'react'
import { Link } from 'react-router-dom'
import { Router, Redirect } from 'react-router'

import Search from './search.jsx'


const NavBar = ( {userType, handleLogout, setWorkers} ) =>
  (<nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">Yard.ly</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <Search setWorkers={setWorkers}/>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {userType === 'placeholder' || userType === undefined ? "" :
            <Link to='/user'>
              <span>My Profile</span>
            </Link>}
          </li>
          {userType === 'placeholder' ? "" :
          userType
          ? <li><Link to='/'>
          <span onClick={handleLogout}>Log Out</span>
        </Link></li>
          : <li><a href="#" data-toggle="modal" data-target="#sign-in-modal">Sign In</a></li>
          }
        </ul>
      </div>
    </div>
  </nav>)

export default NavBar;
