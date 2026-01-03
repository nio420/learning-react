import React from 'react';

const scaleNames = {
    c: 'celsius',
    f: 'Fahrenheit'
};  

export default function TempInput ({temperature, scale, onTemp}) {
        return(
            <div className='verdict'> 
                <fieldset>
                    <legend> Enter your temperture in {scaleNames[scale]}: </legend>
                    <input type="text" value={temperature}  onChange={(e)=> onTemp(e, scale)} />
                </fieldset>
            </div>
        )
}