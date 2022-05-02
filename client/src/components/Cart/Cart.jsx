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
      await axios.get("/api/v1/cart/get").then(res => {
        setCart(res.data.data.data);
        setTotal(res.data.data.total);
      });
    } catch (err) {
      console.log(err);
    }
  };

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
                {item.name} : ${item.price}
              </div>
            );
          })}
          <div className="cart-total">Total: ${total}</div>
        </>
        ) : (
          <div> Your Cart is Empty </div>
        )
        }
      </div>
      { loggedInUser ? (
        <button className="cart-checkout-btn" onClick={handleCheckout}>
          CHECK OUT
        </button>
      ) : (
        <button className="cart-checkout-btn" onClick={() => navigate('/signup')}>
          LOGIN TO PAY
        </button>
      )
      }
      
      <button className="cart-gohome-btn" onClick={() => navigate('/')}>
        RETURN HOME
      </button>
    </section>
  );
}

export default Cart;
