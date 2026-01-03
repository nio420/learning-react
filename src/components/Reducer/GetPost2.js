import { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  error: '',
  post: {}
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        loading: false,
        post: action.result,
        error: ''
      };
    case 'error':
      return {
        loading: false,
        post: {},
        error: 'There was a problem'
      };
    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'success', result: data });
      })
      .catch(() => {
        dispatch({ type: 'error' });
      });
  }, []);

        return (
        <div>
          {state.loading? 'loading....': state.post.title} 
          {state.post.body}
          {state.error || null}
        </div>
    )
}