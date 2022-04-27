import React from "react";
import BooksCard from "./BooksCard";
import "./Home.css";
function Home(props) {
    const { allBooks } = props;
    return (
        <div className="container">
            <section className="row justify-content-md-center">
                {allBooks.map((book, index) => {
                    return (
                        <div className="col-md-4 p-3" key={index}>
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
        </div>
    );
}

export default Home;
