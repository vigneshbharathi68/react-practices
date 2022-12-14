import { useEffect } from "react"

export default function Child ({returnComponent}) {
    useEffect(() => {
        console.log("Function was called")
    }, [returnComponent])
    return (
        <div>
            {returnComponent()}
        </div>
    )
}