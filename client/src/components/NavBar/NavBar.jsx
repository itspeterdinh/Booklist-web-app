/* eslint-disable jsx-a11y/anchor-is-valid */
//import React, { Component } from "react";
import React, { useState, useEffect } from 'react';
// import { MenuItems } from "./MenuItems";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { logout } from '../../apis/authAPIs';
import './NavBar.css';

const NavBar = () => {
  const [state, setState] = useState(false);
  const [user, setUser] = useState();

  //const user =JSON.parse(window.localStorage.getItem('user'));
  const handleClick = () => {
    setState(!state);
  };

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    logout();
    window.localStorage.clear();
  };

  return (
    <>
      <nav className="NavbarItems">
        <div>
          <Link to="/">
            <h1 className="navbar-logo">
              ACKBooks <i className="fa-solid fa-bookmark"></i>
            </h1>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="right-container">
          {user ? (
            <div className="nav nav--user">
              <a className="nav__el" onClick={handleLogout}>Log out</a>
              <a className="nav__el" href="/me">
                <img className="nav__user-img" src={"/img/users/" + user.photo} alt={user.name}/>
                <span>{user.name.split(' ')[0]}</span>
              </a>
            </div>
          ) : (
            <Link to="/signup">
              <Button>Sign in</Button>
            </Link>
          )}
          <Link  to="/checkout">
              <i className="fa-solid fa-cart-shopping cart fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
