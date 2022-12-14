import React, { useRef } from 'react';
import { BackBtn } from '../../../components/BackButton/BackBtn';

export const RefTutorial = () => {
    const inputRef = useRef(null)
    const onClick = () => {
        inputRef.current.value = ""
        inputRef.current.focus()
    }
    return (
        <div>
            <BackBtn />
            <h1>Pedro</h1>
            <input ref={ inputRef } type="text" placeholder="Ex..." />
            <button onClick={ onClick }>Change Name</button>
        </div>
    )
}

// export default RefTutorial;