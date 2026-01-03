import React, {useReducer} from 'react'

const intialState = 0;
const intialState2 = 5;
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
    const [count2, dispatch2 ] = useReducer(reducer , intialState2);
    return (
        
<div>
  <div>
    Count = {count}
  </div>
  <button type="button" onClick={() => dispatch( "Increament" )}>
    Increment
  </button>
  <button type="button" onClick={() => dispatch( "Decreament" )}>
    Decrement
  </button>

  <div>
    <div>
      Count = {count2}
    </div>
    <button type="button" onClick={() => dispatch2( "Increament" )}>
      Increment
    </button>
    <button type="button" onClick={() => dispatch2( "Decreament" )}>
      Decrement
    </button>
  </div>
</div>

    )
}