import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({ isLoading, items }) => {
  // console.log(items);
  return (
    <>
      <div className="card-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {items?.map(item => (
              <Card item={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CardContainer;
