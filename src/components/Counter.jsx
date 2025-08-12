import React, { useState } from 'react'

export default function Counter() {

  const [counter, setCounter] = useState(0);

const onAdd1 = () => {
  if (counter + 1 > 5) {
    setCounter(0);
  } else {
    setCounter(counter + 1);
  }
}

const onReduce2 = () => {
  if (counter - 2 < 0) {
    setCounter(6);
  } else {
    setCounter(counter - 2);
  }
}


  return (
    <div style={{
      color:"blue",
      background:"yellow"
      }}>
      <h2>Counter: {counter}</h2>
      <button onClick={onAdd1}>➕</button>
      <button onClick={onReduce2}>➖2️⃣</button>
    </div>
  )
}