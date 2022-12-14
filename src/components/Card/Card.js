import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ link, title, description }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div className="card-container">
        Link{": "}{link}
      <Link to={link} style={linkStyle}>
        <h1 className="card title">{title}</h1>
        <p className="card description">{description}</p>
      </Link>
    </div>
  );
};
