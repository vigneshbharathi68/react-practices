import React, { useReducer } from 'react';
import { BackBtn } from 'components/BackButton/BackBtn';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
                ...state, 
                count: state.count + 1 
            }
        case 'toggle':
            return { 
                ...state, 
                showText: !state.showText 
            };
        default: 
            return state;
    }
}

export const ReducerTutorial = () => {
    const [ state, dispatch ] = useReducer(reducer, {count: 0, showText: true})

    return (
        <div>
            <BackBtn />
            <h1> { state.count } </h1>
            <button 
                onClick={() => {
                    dispatch({ type: 'INCREMENT' })                    
                    dispatch({ type: 'toggle' })
                }}
            >
                Click Here
            </button>
            { state.showText && <p>Thi is a text</p> }
        </div>
    )
}

// export default ReducerTutorial;

