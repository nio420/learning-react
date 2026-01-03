import './style.css';
//import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTest from './AppTest';


// eslint-disable-next-line no-unused-vars
// function clock ({locale}){
//   return(
//     <h1 className='heading'>
//     <span className='text'>hello matherfucker {new Date().toLocaleTimeString(locale)} </span>
//   </h1>
//   )
// }


// let states = [];
// let stateIndex= -1;
// function setState (defaultValue){
//   const index= ++stateIndex

//   if (states[index]) return states[index]

//   const setValue = (newValue) => {
//     states[index][0] = newValue;
//     renderWithOmit();
//   }
//   const returnArray = [defaultValue, setValue]
//   states[index] = returnArray;
//   return returnArray;
// }

// function App (){
     
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState('');
//    const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const updatedWarning = inputValue.includes('.js')
//             ? 'You need JavaScript skill to complete the task. Do you have it?'
//             : null;

//         setTodo(inputValue);
//         setWarning(updatedWarning);
//     };

//     return (
//         <div>
//             <p>{todo}</p>

//             <p>
//                 <textarea name="todo" id="todo" value={todo} onChange={handleInput}></textarea>
//             </p>
//             <hr />
//             <h2>
//                 {warning || 'Good Choice'}
//             </h2>
//         </div>
//     )
// }

function renderWithOmit (){
  // stateIndex = -1;
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      <AppTest/>
    </React.StrictMode>  
  )
}
renderWithOmit();
reportWebVitals();

