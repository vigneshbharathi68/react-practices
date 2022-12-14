import React from "react";
import { Card } from "../../components/Card/Card";

export const ReactHooks = () => {
  const topics = [
    {
      title: "Use State",
      link: "/react-hooks/use-state",
      description:
        "useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.",
    },
    {
      title: "Use Reduce",
      link: "/react-hooks/use-reduce",
      description:
        "The useReducer Hook is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.",
    },
    {
      title: "Use Effect",
      link: "/react-hooks/use-effect",
      description:
        "By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates",
    },
    {
      title: "Use Ref",
      link: "/react-hooks/use-ref",
      description:
        "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.",
    },
    { title: "Use Memo", link: "/react-hooks/use-memo", description: "" },
    { title: "Use Context", link: "/react-hooks/use-context", description: "" },
    {
      title: "Use Imperative Handler",
      link: "/react-hooks/use-imperative-handler",
      description: "",
    },
    {
      title: "Use Layout Effect",
      link: "/react-hooks/use-layout-effect",
      description: "",
    },
    {
      title: "Use Callback",
      link: "/react-hooks/use-callback",
      description: "",
    },
  ];
  return (
    <>
      <h1 className="main-title">React Hooks</h1>
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
