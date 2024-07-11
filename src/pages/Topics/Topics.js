import React from "react";
import { Card } from "../../components/Card/Card";

export const Topics = () => {
  const topics = [
    {
      title: "React Hooks",
      link: "/react-hooks",
      description:
        "How and what's the use of React Hooks. Practical implementations.",
    },
    {
      title: "React Table",
      link: "/react-table",
      description: "React Table is a workhorse. It's built to materialize, filter, sort, group, aggregate, paginate and display massive data sets using a very small API surface. "
    },
    {
      title: "React Query",
      link: "/react-query",
      description: "React Query is a npm module which deals with promises or async/await. There's no global state to manage, reducers, normalization systems or heavy configurations to understand. Simply pass a function that resolves your data (or throws an error) and the rest is history."
    },
    {
      title: "React Forms",
      link: "/react-forms/react-forms-validation",
      description: "React Forms are the most important part of any application. It's the way to interact with the user. React Forms are used to get the user input and then process it."
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
