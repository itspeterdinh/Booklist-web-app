import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import './Cart.css';

function Cart() {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setTotal(0);
    addToCart([]);
  };

  const handleHome = () => {
    navigate('/');
  };

  const itemRemove = i => {
    addToCart(myCart.filter((item, index) => index !== i));
    setTotal(total - myCart[i].total_price);
  };
  return (
    <section className="cart-container">
      <div className="cart-header">Checkout:</div>
      <div className="cart-items">
        {myCart.map((item, i) => {
          return (
            <div className="cart-item" key={i}>
              <div>
                <img src={item.image} className="cart-item-img" />
              </div>
              <div className="text-items">
                <div>{item.name} </div>
                <div>Price: ${item.price}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
              <div className="delete-btn">
                <i
                  className="fa fa-trash"
                  aria-hidden="true"
                  onClick={() => itemRemove(i)}
                ></i>
              </div>
            </div>
          );
        })}

        <div className="cart-total">Total: ${total}</div>
      </div>
      <button className="cart-checkout-btn" onClick={handleCheckout}>
        DONE
      </button>
      <button className="cart-gohome-btn" onClick={handleHome}>
        RETURN HOME
      </button>
    </section>
  );
}

export default Cart;
