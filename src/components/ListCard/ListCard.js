import React from "react";
import { Card } from "../Card/Card";
export const ListCard = ({title, data: topics}) => {
  return (
    <>
      <h1 className="main-title">{title}</h1>
      <div className="card-layout">
        {topics.map((el, index) => {
          return (
            <Card
              key={index}
              link={el.link}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
    </>
  );
};
