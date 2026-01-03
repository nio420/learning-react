 import React from 'react'
import { useState, useEffect, useRef } from 'react';

function TimeRef (){
    const [date , setDate ] = useState (new Date());
    const buttonRef = useRef();

       const tick = () => {
            setDate (new Date())
            console.log(`clock ticking`);
    }

    useEffect (() => {
      buttonRef.current =  setInterval(tick, 1000);
        console.log(`starting count`);
        // cleanup on unmount
        return () => {
            clearInterval(buttonRef.current)
            console.log(`component unmaonut `);
        }
    }, [] );

    return (
            <div>
                <p>Time: {date.toLocaleString()}</p>
                <p>
                    <button type= 'button' onClick={() => clearInterval(buttonRef.current)}> CleanUp </button>
                </p>
            </div>
    )
}

export default TimeRef;