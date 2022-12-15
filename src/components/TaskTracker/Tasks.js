import Task from './Task';

function Tasks ({tasks, onDelete}) {
    
    return (
        <div className="task">
            { tasks.map( (task) => <Task key={task.id} task={ task } onDelete={ onDelete }/> ) }
        </div>
    )
}

export default Tasks;
