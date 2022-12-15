import React, { useState } from 'react';
import { BackBtn } from 'components/BackButton/BackBtn';

export const StateTutorial = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const [inputValue, setInputValue] = useState('Pedro');
    const onChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            <BackBtn />
            <hr />
            <h1>On Click to increment using useState of method in react jsnewValue</h1>
            <h2>{counter}</h2>
            <div style={ buttonsWrap }>
                <button style={buttonStyle} onClick={increment}> Increment </button>
                <button style={buttonStyle} onClick={ decrement }> Decrement </button>

            </div>
            <hr />
            <h1>By get input reactively using useState method in react js</h1>
            <input onChange={ onChange } placeholder="Enter something ...."/>
            <h2>{ inputValue }</h2>
        </div>
    )
}

const buttonsWrap = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
}

const buttonStyle = {
    padding: '.5rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '.25rem'

}

// export StateTutorial;
