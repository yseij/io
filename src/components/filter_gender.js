import React from "react";

const FilterGender = (props) => {
  return (
    <select onChange={props.onChange}>
      <option value="/">Geen sorting</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
};

export default FilterGender;
