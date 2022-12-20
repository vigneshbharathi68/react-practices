import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete }) {
    const { id, text, day, reminder } = task
    return (
        <div className={`${reminder ? 'reminder': ''}`} key={id}>
            <h3>
                { text }
                <FaTimes
                    style={iconStyle}
                    onClick={() => onDelete(id)}
                />
            </h3>
            <p>{ day }</p>
        </div>
    )
}

const iconStyle = {
    color: 'red', 
    cursor: 'pointer',
    float: 'right'
}

export default Task;