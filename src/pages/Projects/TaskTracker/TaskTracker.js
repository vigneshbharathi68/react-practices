// import logo from './logo.svg';
import Header from 'components/TaskTracker/Header'
import Tasks from 'components/TaskTracker/Tasks'
import AddTask from 'components/TaskTracker/AddTask'
import './TaskTracker.css';
import { useState } from 'react'
import noDataToShow from 'assets/images/empty-box.png'

export const TaskTracker = () => {
  let [tasks, setTask] = useState([
    {
      "text": "Complete the task tracker app with React JS",
      "day": "September 10, 2022",
      "reminder": true,
      "id": 5
    },
    {
      "text": "Doctor's Appoinment",
      "day": "September 12, 2022",
      "reminder": false,
      "id": 6
    },
    {
      "text": "Parents meeting at school",
      "day": "September 20, 2022",
      "reminder": false,
      "id": 7
    }
  ])

  // Add a New Task
  const onAddTask = (task) => {
    setTask([...tasks, task])
  }

  // Delete a Task
  const deleteTask = (id) => {
    setTask(tasks.filter(el => el.id !== id)) 
  }

  return (
    <div className="container">
      <aside>
        <Header title="Task Trackers" />
        <AddTask onAdd={ onAddTask }/>
      </aside>
      <section>
        {tasks.length > 0 
        ? <Tasks tasks={ tasks } onDelete={ deleteTask }/> 
        : <div className='no-data-show'>
            <img src={noDataToShow} alt='No data to show'/>
            <p style={noDataStyle}>No tasks to show</p>
          </div> 
        }
      </section>
    </div>
  );
}

const noDataStyle = {
  textAlign: 'center'
}

// export default TaskTracker;
