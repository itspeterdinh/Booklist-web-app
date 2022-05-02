import React from 'react';
// import Card from './Card';
import BooksCard from '../Home/BooksCard';
import './CardContainer.css';

const CardContainer = ({ isLoading, items }) => {
  return (
    <>
      <div className="cards-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
        <>
          <section className="row justify-content-md-center">
            {items.map((book, index) => {
              return (
                <div className="col-md-3 p-3" key={index}>
                  <BooksCard
                    name={book.name}
                    slug={book.slug}
                    category={book.category}
                    description={book.description}
                    price={book.price}
                    image={book.image}
                  />
                </div>
              );
            })}
          </section>
        </>
        )}
      </div>
    </>
  );
};

export default CardContainer;
