import { useState } from "react"

export default function AppButton({appButton}:any){
    const [count, setCount] = useState(appButton.begin || 0)
    return (
        <>
            <p>ID. {appButton.id} Count {count}</p>
           
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>

            <button onClick={()=>{
                setCount(count - 1)
            }}>-</button>
        
        </>
    )
    
}