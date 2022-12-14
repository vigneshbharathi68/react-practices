import React from "react";
import { Card } from "../../components/Card/Card";

export const Topics = () => {
  const topics = [
    {
      title: "React Hooks",
      link: "/react-hooks",
      description:
        "How and what's the use of React Hooks. Practical implementations",
    },
  ];
  return (
    <div className="card-layout">
        {topics.map((el, index) => {
            return (
                <Card link={el.link} title={el.title} description={el.description} key={index} />
            )
        })}
    </div>
  );
};
