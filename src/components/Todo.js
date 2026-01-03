import { useState } from 'react';

function Todo (){
    const [ todo, setTodo]= useState({
        title: '',
        description: ''
    })

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
        
          const { title, description } = todo;
  return (
    <div>
      <p>{title}</p> {/* ✅ show text, not <title/> */}
      <p>
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTodo({
              ...todo, // ✅ lowercase
              title: e.target.value
            })
          }
        />
      </p>
      <p>
        <textarea
          name="todo"
          id="todo"
          value={description}
          onChange={(e) =>
            setTodo({
              ...todo, // ✅ lowercase
              description: e.target.value
            })
          }
        ></textarea>
      </p>
      <hr />
    </div>
  );
}

export default Todo;