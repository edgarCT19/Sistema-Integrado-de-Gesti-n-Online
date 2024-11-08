import React from "react";

const SelectTuple = () => {
  return (
    <>
      <select className="select-filter mx-2">
        <option>Ordenar por</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </>
  );
};

export default SelectTuple;
