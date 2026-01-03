import React, {useReducer} from 'react'

const intialState = {
    Counter: 0,
    Counter2: 1,
}
const reducer = (state, action) => {
    switch (action.type){
        case 'Increament':
          return {...state, Counter: state.Counter + action.value};
        case 'Decreament':
          return {...state, Counter: state.Counter - action.value};
        case 'Increament2':
          return {...state, Counter2: state.Counter2 + action.value};
        case 'Decreament2':
          return {...state, Counter2: state.Counter2 - action.value};
          default: 
          return state;
    };
}

export default function ComplexCounter (){
    const [count, dispatch ] = useReducer(reducer , intialState);
    return (
        <div>
            <div>
                Count = {count.Counter}
            </div>
            <button type = ' button' onClick = {() => dispatch ({type: 'Increament', value: 1})} > Increament by one </button>
            {/* <button type = ' button' onClick = {() => dispatch ({type: 'Increament', value: 5})} > Increament by Five </button> */}

            <button type = ' button' onClick = {() => dispatch ({type: 'Decreament', value: 1})} > Decreament by one </button>
            {/* <button type = ' button' onClick = {() => dispatch ({type: 'Decreament', value: 5})} > Decreament by Five </button> */}
                    <hr />
            <div>Count 2 = {count.Counter2}</div>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "Increament2", value: 1 })}
                >
                    Increment 2 by one
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "Decreament2", value: 1 })}
                >
                    Decrement 2 by one
                </button>
                </div>


      
    );
}