import { counterContext } from "../../App";
import { useContext } from "react";

export default function ComponentB() {
  const { countDispatch } = useContext(counterContext);

  return (
    <div>
      <p>Component A</p>
      <button
        type="button"
        onClick={() => countDispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => countDispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
}
