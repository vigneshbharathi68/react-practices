import react, { useRef } from "react";
import { BackBtn } from "components/BackButton/BackBtn";
import Button from "./Button";

export const ImperativeHandle = () => {
    const btnRef = useRef(null)
    return (
        <div>
            <BackBtn />
            <button onClick={() => { btnRef.current.alterToggle() }}>Button From Parent</button>
            <Button ref={ btnRef }/>
        </div>
    )
}

// export default ImperativeHandle;