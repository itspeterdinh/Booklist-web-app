import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const loggedInUser = window.localStorage.getItem('user');
  const navigate = useNavigate();
  const {cart, setCart, total, setTotal} = useContext(AppContext);

  const updateCart = async (item,action) => {
    try {
      await axios.get(`/api/v1/cart/update/${item}?action=${action}`).then(res => {
        setCart(res.data.data.data);
        setTotal(res.data.data.total);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   fetchCart();
  // }, []);

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
                    <div>Price: ${item.price}</div>
                    <div>Quantity:
                      <span><i className="fa-solid fa-plus plus-icon" onClick={() => updateCart(item.slug, "add")}></i></span>
                       {item.qty}
                      <span><i className="fa fa-minus minus-icon" onClick={() => updateCart(item.slug, "remove")}></i></span>
                    </div>
                    <div>Sub total: {parseFloat(item.price * item.qty).toFixed(2)}</div>
                  </div>
                  <div className="delete-btn">
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => updateCart(item.slug, "clear")}
                    ></i>
                  </div>
                </div>
            );
          })}
          <div className="cart-total">Total: ${parseFloat(total).toFixed(2)}</div>
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
