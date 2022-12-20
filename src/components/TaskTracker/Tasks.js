import Task from './Task';

function Tasks ({tasks, onDelete}) {
    
    return (
        <div className="task">
            { tasks.map( (task, index) => <Task key={index} task={ task } onDelete={ onDelete }/> ) }
        </div>
    )
}

export default Tasks;
