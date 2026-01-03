import React, { useState } from 'react';

function TodoCounter (){
    const [count, setCount] = useState(0);

    let i = 0;
    const five = () => {
        while(i < 5){
            setCount ((prevState) => prevState+1)
             i = i +1;
        }
     }

    return(
        <div>
            {count}

            <p>
                <button type= 'button' onClick={(e) => setCount (count+1)}> Add one </button>
            </p>
            <hr />
            <p>
                <button type= 'button' onClick={five}> Add five </button>
            </p>
        </div>
    );
}

export default TodoCounter;