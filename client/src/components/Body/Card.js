import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <div className="card__image-background"></div>
        <div className="card__image">
          {/* <img
            src="./images/cal-1.jpg"
            alt="Book1"
            className="card__image-img"
          /> */}
        </div>
        <div className="card__detail">
          <span className="date">4 days ago</span>
          <h4 className="card__title">{item.name}</h4>
          <h4 className="card__author">{item.author}</h4>
          <h4 className="card__type">{item.type}</h4>
        </div>
        <div className="card__stats">
          <div className="stat">
            <div className="value">4m</div>
            <div className="type">read</div>
          </div>
          <div className="stat border">
            <div className="value ">5123</div>
            <div className="type">views</div>
          </div>
          <div className="stat">
            <div className="value">32</div>
            <div className="type">comments</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
