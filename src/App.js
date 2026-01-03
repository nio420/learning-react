//  //import ClockList from "./components/ClockList";
 import React from 'react'
 import {useState, useCallback, useMemo , useReducer} from 'react'
//  //import Clock from "./components/Clock";
// import Calculator from "./components/Calculator";
// //import Form from "./components/Form";
// import Text from "./components/Composition/Text";
// import Emoji from "./components/Composition/Emoji";
// import Bracket from "./components/Composition/Bracket";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
//  import Counter from "./components/Counter";
// import Section from "./components/Section";
// import MyComponent from './MyComponent';
// import MyFuncComponent from './MyfuncComponent';
// //import ThemeContext from './Contextx/ThemeContext'
// //import Todo from './components/Todo';
// //import TodoCounter from './components/todoCounter';
import MyFuncComponent from './MyfuncComponent'; 


// function App() {
//     const [show, setShow] = useState(true)
//   console.log(`app render`);
//   // const quantities = [1, 2, 3, 4];
//   return (
//       <>
//     <div className="App">
//       {/* <Clock locale="bn-BD" /> 
//       <ClockList quantities={quantities} /> */}  {/* ✅ Capitalized component name */}
//       {/* <Form/> */}
//       <Calculator/>   
    
//     <div>{show && <MyComponent/>}</div>
//     <p>
//         <button type='button' onClick={() => setShow ((prevShow) => !prevShow)}> {show ? 'Hide post' : 'Show post'} </button>
//     </p>

// <Emoji>
//   {({ addEmoji }) => (
//     <Bracket>
//       {({ addBracket }) => (
//         <Text addEmoji={addEmoji} addBracket={addBracket} />
//       )}
//     </Bracket>
//   )}
// </Emoji>
//     </div>

// {/* higher order component
// <ClickCounter/>  
// <HoverCounter/> */}

// {/* render component and method */}
// <Counter>
//   {(Counter, incrementCount) => (
//     <ClickCounter count ={Counter} incrementCount={incrementCount} />
//   )}
// </Counter>

// <Counter>
//   {(Counter, incrementCount) => (
//     <HoverCounter count ={Counter} incrementCount={incrementCount} />
//   )}
// </Counter>
// <Section/>

//      </>
//   );
// }


//  export default App;

// export default class App extends React.Component {
//     state = {
//         theme: 'light',

//         switchTheme: () => {
//             this.setState(({ theme }) => {
//                 if (theme === 'dark') {
//                     return {
//                         theme: 'light',
//                     };
//                 } else
//                     return {
//                     theme: 'dark',
//                 };
//             });
//         },
//     };

//     render() {
//         return (
//             <div className="app">
//                 <Counter>
//                     {(counter, incrementCount) => (
//                         <ClickCounter count={counter} incrementCount={incrementCount} />
//                     )}
//                 </Counter>
//                 <ThemeContext.Provider value={{switchTheme: this.switchTheme}}>
//                     <Section />
//                 </ThemeContext.Provider>
//                 <Todo/>
//                 <TodoCounter/>>
//             </div>
//         );
//     }
// }


import ShowCount from './components/ShowCount';
import Title from './components/Title';
import FromRef from './components/FormRef';
import TimeRef from './components/TImeRef';
import ComponentA from './components/Reducer/ComponentA';

// reducer function
export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function App (){
const [ show , setShow] = useState(false);
const [ count1, setCount1] = useState(0);
const [ count2, setCount2] = useState(0);
const [ count, dispatch] = useReducer(reducer, initialState);

const incrementOne = useCallback(() =>{
  setCount1 ((prevCount) => prevCount +1 )
}, [] );

const incrementFive = useCallback (() =>{
  setCount2 ((prevCount) => prevCount + 5 )
}, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 100) i += 1; // costly operation
        return count1 % 2 === 0;
    }, [count1]);

 return (
    <div className='app'>
        <div>count: {count} </div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>


       {show && <MyFuncComponent />}
      <FromRef/>
      <p>
        <button
          type="button"
          onClick={() => setShow((prevShow) => !prevShow)}
          >
          {show ? "Hide post" : "Show post"}
        </button>
      </p>
      <hr /><hr />

       <Title/>
      <ShowCount count={count1} title='counter1'/>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span> <br /><br />
      <button type="button" onClick={incrementOne}>Increment by One</button> 

      <hr />

      <ShowCount count={count2} title='counter2'/>
      <button type="button" onClick={incrementFive}>Increment by Five</button>
      <TimeRef/>
    </div>
  );
} 

export default App;