import React from "react";
import Select from "./Select";
import Search from "./Search";

import "./FormControl.css";
const FormControl = (props) => {
  return (
    <>
      <div className="formControl">
        <Search />
        <Select category={props.category} setCategory={props.setCategory}/>
      </div>
    </>
  );
};

export default FormControl;
