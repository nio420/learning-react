import React, {useReducer} from 'react'

const intialState = 0
const reducer = (state, action) => {
    switch (action){
        case 'Increament':
          return state + 1;
        case 'Decreament':
          return state - 1;
          default: 
          return state;
    };
}

export default function Counter (){
    const [count, dispatch ] = useReducer(reducer , intialState);
    return (
        <div>
            <div>
                Count - {count}
            </div>
            <button type = ' button' onClick = {() => dispatch ('Increament')} > Increament </button>
            <button type = ' button' onClick = {() => dispatch ('Decreament')} > Decreament </button>
        </div>
    )
}