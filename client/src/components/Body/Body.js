import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormControl from './FormControl';
import CardContainer from './CardContainer';

import './Body.css';

const Body = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    axios.get('/api/v1/items').then(res => {
      console.log(res);
      setData(res.data.data.items);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <>
      <div className="Body">
        <FormControl />
        <CardContainer isLoading={isLoading} items={data} />
      </div>
    </>
  );
};

export default Body;
