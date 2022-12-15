import React, { useState, useCallback } from 'react';
import { BackBtn } from 'components/BackButton/BackBtn';
import Child from './Child'

export const CallBackTutorial = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yo, pls sub to the channel")

    const returnComponent = useCallback(() => {
        return data
    }, [data])

    return (
        <div className="App">
            <BackBtn />
            <Child returnComponent={returnComponent} />
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                Toggle
            </button>
            { toggle && <h1> toggle </h1> }
        </div>
    )
}