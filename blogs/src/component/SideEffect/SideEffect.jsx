import React, { useEffect, useState } from 'react'

// useEffect
// 1) Executes after reload




const SideEffect = () => {
    const [counter, setCounter] = useState(0);
    const [bonus, setBonus] = useState(0);

    useEffect(() => {
        

    }, [bonus])




    function increment() {
        setCounter((prev) => {
            return prev + 1;
        })

        if(counter%2 == 0){
            setBonus((prev) => {
                return prev + 1;
            })
        }



    }
    
    function decrement() {
        setCounter((prev) => {
            return prev - 1;
        })
        
    }




    return (
        <div style={{ height: "100vh" }}>
            <h1>{counter}</h1>
            <h1>{bonus}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}

export default SideEffect