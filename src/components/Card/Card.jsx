import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`product/${item.id}`}>
      <div className="card">
        <div className="image">
            {item.isNew && <span>New Season </span>}
          <img src={item.img} alt="" className="mainImg" />
         
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <p>${item.oldPrice}</p>
            <p>${item.newPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
