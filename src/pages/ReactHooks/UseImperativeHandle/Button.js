import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [ toggle, setToggle ] = useState(false)
    const imperativeObject = {
        alterToggle() {
            setToggle(!toggle)
        }
    }
    useImperativeHandle(ref, () => (imperativeObject))

    return (
        <>
            <button>
                Button From Child
            </button>
            <br />
            { toggle && <span>Toggle</span> }
        </>
    )
})

export default Button;
