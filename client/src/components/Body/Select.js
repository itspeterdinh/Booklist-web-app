import React from "react";
import "./Select.css";

const Select = () => {
  return (
    <>
      <select className="select">
        <option value="selling">Selling</option>
        <option value="renting">Renting</option>
        <option value="exchange">Exchange</option>
      </select>
    </>
  );
};

export default Select;
