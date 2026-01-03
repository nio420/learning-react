 import React from 'react'
import { useState, useEffect } from 'react';

function MyFuncComponent (){
    const [count , setCount ] = useState (0);
    const [date , setDate ] = useState (new Date());
    const [text , setText ] = useState ('');

    const addClick = () =>{
        setCount ((prevCount) => prevCount + 1)
    }
       const tick = () => {
            setDate (new Date())
            console.log(`clock ticking`);
    }

    useEffect (() => {
        document.title = `Clicked ${count} times`;
        console.log(`update doc count`);
    }, [count])

    useEffect (() => {
      const interval =  setInterval(tick, 1000);
        console.log(`starting count`);
        // cleanup on unmount
        return () => {
            clearInterval(interval)
            console.log(`component unmaonut `);
        }
    }, [] );

    return (
            <div>
                <p>Time: {date.toLocaleString()}</p>
                <p>
                    <input type="text" value={text} onChange= {(e) => setText (e.target.value)} />
                </p>
                <p>
                    <button type= 'button' onClick={addClick}> Click </button>
                </p>
            </div>
    )
}

export default MyFuncComponent;