//import React, { Component } from "react";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./NavBar.css";

const NavBar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  //   state = { clicked: false };

  //   handleClick = () => {
  //     this.setState({ clicked: !this.state.clicked });
  //   };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          ACKBooks <i class="fa-solid fa-bookmark"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  );
};

export default NavBar;
