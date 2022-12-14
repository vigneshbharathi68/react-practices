import React from "react";
import { Card } from "../../components/Card/Card";
import "./Home.css";

export const Home = () => {
  
  const projects = [
    {title: 'Task Tracker app', link: '/projects/task-tracker', description: 'A simple task tracker app built with React'}
  ]
  

  return (
    
    <>
    <section>
      <h1 className="main-title">Projects</h1>
      <div className="card-layout">
        {projects.map((el, index) => {
          return (
          <Card key={index} link={el.link} title={el.title} description={el.description} />
          );
        })}
      </div>
    </section>
    {/* topics section */}
    <section>
      
    </section>
    </>
  );
};
