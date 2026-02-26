import React, { useState } from "react";
import DishDetail from "./DishdetailComponent";
// import { Media } from 'reactstrap';

export default function Menu({ dishes }) {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

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

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <DishDetail selectedDish={selectedDish} />
    </div>
  );
}
