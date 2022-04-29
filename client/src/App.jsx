import React, { Fragment, useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Context/CartProvider';
import CardContainer from './components/Body/CardContainer';
import FormControl from './components/Body/FormControl';

const App = () => {
  const [data, setData] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('math');

  const fetchData = async () => {
    try {
      await axios.get(`/api/v1/items?category=${category}`).then(res => {
        setData(res.data.data.data);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <CartProvider data={{ myCart, addToCart, total, setTotal }}>
      <Router>
        <div className="App">
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <FormControl category={category} setCategory={setCategory} />
                  <CardContainer isLoading={isLoading} items={data} />
                </Fragment>
              }
            />
            <Route path="/signup" element={<Login />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
