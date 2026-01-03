// render method apply 
import React from 'react';

export default function ClickCounter ({count, incrementCount}) {
    // state = {
    //     count: 0
    // }

    // incrementCount = () => {
    //     this.setState((prevstate) => ({count : prevstate.count + 1}))
    // }
        return (
            <div>
                <button type= 'button' onClick= {incrementCount}> Clicked {count} times </button>
            </div>
        )
}

//==================================================================================================
// higher oreder component

// import WithCounter from "./Composition/HOC/WithCounter";

// const ClickCounter = (props) =>{
//      const {count, incrementCount} = props
//         return (
//             <div>
//                 <button type= 'button' onClick= {incrementCount}> Clicked {count} times </button>
//             </div>
//         )
//     }
// export default WithCounter(ClickCounter)