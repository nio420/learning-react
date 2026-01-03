// render method apply 
import React from 'react';

// export default function HoverCounter ({count, incrementCount}) {
//     state = {
//         count: 0
//     }

//     incrementCount = () => {
//         this.setState((prevstate) => ({count : prevstate.count + 1}))
//     }
//         return (
//             <div>
//                 <h1 type= 'button' onMouseOver= {incrementCount}> Hover {count} times </h1>
//             </div>
//         )
// }

//===============================================================================================
// higher oreder component

// import WithCounter from "./Composition/HOC/WithCounter";

// const HoverCounter = (props) =>{
//      const {count, incrementCount} = props
//         return (
//             <div>
//                 <h1 onMouseOver= {incrementCount}> Hover {count} times </h1>
//             </div>
//         )
//     }
    
// export default WithCounter(HoverCounter)



export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;

    console.log('HoverCounter rendered');
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}