import React, { useState } from "react";
// import { Media } from 'reactstrap';

export default function Menu({ dishes }) {

  const [selectedDish, setSelectedDish ] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  }

  const menu = dishes?.map((dish) => {
    return (
      <div key={dish?.id} className="col-12 mt-5">
        <div className="d-flex gap-4">
          <div onClick={() => onDishSelect(dish)}>
            <img src={dish?.image} alt={dish?.name} />
            <div className="fw-bold">{dish?.name}</div>
          </div>
        </div>
      </div>
    );
  });

  const renderSelectedDish = (selectedDish) => {
    return (
        <div>
          <div className="fw-bold">{selectedDish?.name}</div>
          <p>{selectedDish?.description}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div>{renderSelectedDish(selectedDish)}</div>
    </div>
  );
}
