import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import './Home.css';
import { Modal } from 'react-bootstrap';
function BooksCard(props) {
  const { name, category, description, price, image } = props;
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);
  const handleclick = () => {
    setAdded(true);
    const newItems = {
      name: name,
      price: price * quantity,
      image: image
    };
    addToCart(item => [...item, newItems]);
    setTotal(total => (total += Number(newItems.price)));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-body rounded card-container">
      <div onClick={handleShow}>
        <h1>{name}</h1>
        <img
          src={image}
          style={{ height: '250px', width: '200px' }}
          className="img-fluid"
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <span>Quantity </span>
          <select
            value={quantity}
            onChange={e => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1">
          <h1>Price: ${price * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          {isAdded ? (
            <button disabled className="btn-disabled">
              Added
            </button>
          ) : (
            <button className="add-btn" onClick={handleclick}>
              Add To Cart
            </button>
          )}
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={image}
            style={{ height: '250px', width: '200px' }}
            className="img-desc"
          />
          <p style={{ color: 'black', textAlign: 'center' }}>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="close-btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BooksCard;
