import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import './Cart.css';

function Cart() {
  const { myCart, total, addToCart, setTotal } = useContext(AppContext);
  const loggedInUser = window.localStorage.getItem('user');
  const navigate = useNavigate();

  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };

  return (
    <section className="cart-container">
      <div className="cart-header">Checkout:</div>
      <div className="cart-items">
        {myCart.slice(1).map((item, i) => {
          return (
            <div className="cart-item" key={i}>
              <img src={item.image} alt="error" className="cart-item-img" />
              {item.name} : ${item.price}
            </div>
          );
        })}
        <div className="cart-total">Total: ${total}</div>
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
