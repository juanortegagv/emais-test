import React, { useState } from 'react';

interface ButtonCounterProps {
  label: string;
}

export const ButtonCounter: React.FC<ButtonCounterProps> = ({ label }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {label}
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

