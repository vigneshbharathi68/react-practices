import React from 'react';
import { Card } from '../../components/Card/Card';

export const Projects = () => {
  const projects = [
    {title: 'Task Tracker app', link: '/projects/task-tracker', description: 'A simple task tracker app built with React'},
    {title: 'Quiz Challenge', link: '/projects/quiz-challenge', description: 'Quiz Challenges after choosed all the answers it will show an result'},
    

  ];
  return (
    <div className="card-layout">
        {projects.map((el, index) => {
            return (
                <Card link={el.link} title={el.title} description={el.description} key={index} />
            )
        })}
    </div>
  );
}
