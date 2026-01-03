import React, { forwardRef } from 'react';

function InputRef({ type, placeholder }, ref) {
  return <input ref={ref} type={type} placeholder={placeholder} />;
}

const ForwardInput = forwardRef(InputRef);

export default ForwardInput;
