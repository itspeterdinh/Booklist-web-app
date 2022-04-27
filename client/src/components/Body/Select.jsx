import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <>
      <select className="select" value={props.category} 
        onChange={(e) => props.setCategory(e.target.value)}>
        <option value="math">Math</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
      </select>
    </>
  );
};

export default Select;
