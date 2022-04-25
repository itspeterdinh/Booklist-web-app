/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormControl from './FormControl';
import CardContainer from './CardContainer';

import './Body.css';

const Body = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("selling");

  const fetchData = async () => {
    try {
      await axios.get(`/api/v1/items?category=${category}`).then(res => {
        console.log(res);
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
  },[category]);

  return (
    <>
      <div className="Body">
        <FormControl category={category} setCategory={setCategory}/>
        <CardContainer isLoading={isLoading} items={data} />
      </div>
    </>
  );
};

export default Body;
