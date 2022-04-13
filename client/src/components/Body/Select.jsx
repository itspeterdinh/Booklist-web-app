import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <>
      <select className="select" value={props.category} 
        onChange={(e) => props.setCategory(e.target.value)}>
        <option value="selling">Selling</option>
        <option value="renting">Renting</option>
        <option value="exchange">Exchange</option>
      </select>
    </>
  );
};

export default Select;
