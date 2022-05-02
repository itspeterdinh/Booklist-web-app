/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormControl from './FormControl';
import CardContainer from './CardContainer';
import CartProvider from '../Context/CartProvider';

import './Body.css';

const Body = () => {
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
  }, [category]);

  return (
    <CartProvider data={{ myCart, addToCart, total, setTotal }}>
      <div className="Body">
        <FormControl category={category} setCategory={setCategory} />
        <CardContainer isLoading={isLoading} items={data} />
      </div>
    </CartProvider>
  );
};

export default Body;
