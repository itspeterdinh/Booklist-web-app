/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Badges.css";

const Badges = () => {
  return (
    <>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </>
  );
};

export default Badges;