//import {useState} from 'react'
import {signal, effect, computed} from '@preact/signals-react'

export default function Omit (){
    //const [ count, setCount] = useState(0)
    const count = signal(0)
    const double = computed(()=> count.value * 2)
    // const Increament = (val) => {
    //     setCount ((prev) => prev + val)   
    // }
    // const Dcreament = () => {
    //     setCount ((prev) => {
    //         if(prev <= 0){
    //             alert("put a number more than zero")
    //             return 0;
    //         } else {
    //             return prev - 5;
    //         }
    //     })
    // }

    // const update = ()=> {
    //     batch (()=> {
    //         count.value +=   1
    //         double.value = count.value * 2
    //     })
    // }

    const update = ()=> count.value +=   1
    const updateDev = ()=> count.value -=   1
    
    effect(()=> {
        console.log(`update value is ${count}`);
    })
    return (
        <div className="hudai" style={{backgroundColor: "lightblue" , padding: '10px', marginBottom: '30px' }}>
        <p style={{ fontSize: "20px" }}> count : {count}  </p>
        <p style={{ fontSize: "20px" }}> double : {double}  </p>
        <button onClick={update} style={{ margin: "5px", padding: "8px 12px", cursor: "pointer" }}
> Increament </button>
        <button onClick={updateDev} style={{ margin: "5px", padding: "8px 12px", cursor: "pointer" }}
> Dcreament </button>
        </div>
    )
}