import React from 'react';
import {useEffect, useRef} from 'react'
import InputRef from './InputRef';

export default function FromRef (){
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <p>
                <InputRef ref={inputRef} type="text" placeholder=' Enter something' />
            </p>
        </div>
    )
}
