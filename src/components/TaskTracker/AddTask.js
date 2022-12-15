import { useState } from 'react';

function AddTask ({ onAdd }) {
    const [ text, setText ] = useState('');
    const [ day, setDay ] = useState('');
    const [ reminder, setReminder ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ text, day, reminder })
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={ onSubmit }>
            <div className="form-control">
                <label htmlFor="title"> Title </label>
                <input name="title" type="text" onChange={(e) => setText(e.target.value)} required />
            </div>
            <div className="form-control">
                <label htmlFor="day"> Day </label>
                <input name="day" type="text" onChange={(e) => setDay(e.target.value)} required />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder"> Reminder </label>
                <input name="reminder"  onChange={ (e) => {setReminder(e.currentTarget.checked)} } type="checkbox"/>
            </div>
            <input className="btn" type="submit" name="Submit" />
        </form>
    )
}

export default AddTask;
