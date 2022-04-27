import React from 'react';
// import Card from './Card';
import BooksCard from '../Home/BooksCard';
import './CardContainer.css';

const CardContainer = ({ isLoading, items }) => {
  // console.log(items);
  return (
    // <>
    //   <div className="card-container">
    //     {isLoading ? (
    //       <div>Loading...</div>
    //     ) : (
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
    //     )}
    //   </div>
    // </>
  );
};

export default CardContainer;
