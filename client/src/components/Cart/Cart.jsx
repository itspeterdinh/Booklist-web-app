import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const loggedInUser = window.localStorage.getItem('user');
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      await axios.get('/api/v1/cart/get').then(res => {
        setCart(res.data.data.data);
        setTotal(res.data.data.total);
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(cart);
  

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckout = () => {
    setTotal(0);
    setCart([{}]);
  };

  return (
    <section className="cart-container">
      <div className="cart-header">Checkout:</div>
      <div className="cart-items">
        {cart ? (
          <>
            {cart.map((item, i) => {
              return (
                <div className="cart-item" key={i}>
                  <img src={item.image} alt="error" className="cart-item-img" />
                  <div className="text-items">
                    <div>{item.name} </div>
                    <div>Price: ${item.price / item.qty}</div>
                    <div>Quantity:
                      <span><i className="fa-solid fa-plus plus-icon"></i></span>
                       {item.qty}
                       <span><i className="fa fa-minus minus-icon"></i></span></div>
                  </div>
                  <div className="delete-btn">
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      
                    ></i>
                  </div>
                </div>
              );
            })}
            <div className="cart-total">Total: ${total}</div>
          </>
        ) : (
          <div> Your Cart is Empty </div>
        )}
      </div>
      {loggedInUser ? (
        <button className="cart-checkout-btn" onClick={handleCheckout}>
          CHECK OUT
        </button>
      ) : (
        <button
          className="cart-checkout-btn"
          onClick={() => navigate('/signup')}
        >
          LOGIN TO PAY
        </button>
      )}

      <button className="cart-gohome-btn" onClick={() => navigate('/')}>
        RETURN HOME
      </button>
    </section>
  );
}

export default Cart;
