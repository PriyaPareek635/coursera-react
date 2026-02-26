import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function renderDish(dish) {
  if (dish == null) {
    return <div></div>;
  }

  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function renderComments(comments) {
  if (comments == null) {
    return <div></div>;
  }

  const commentItems = comments.map((comment) => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <p>
        -- {comment.author}, {comment.date}
      </p>
    </li>
  ));

  return (
    <div>
      <h4>Comments</h4>
      <ul className="list-unstyled">{commentItems}</ul>
    </div>
  );
}

function DishDetail({ selectedDish }) {
  if (selectedDish == null) {
    return <div></div>;
  }

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        {renderDish(selectedDish)}
      </div>
      <div className="col-12 col-md-5 m-1">
        {renderComments(selectedDish.comments)}
      </div>
    </div>
  );
}

export default DishDetail;
