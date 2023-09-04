import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before first setState: ${count}`);
    setCount(count => count + 1);
    console.log(`after first setState: ${count}`);
    setCount(count => count + 1);
    console.log(`after second setState: ${count}`);
  }
  console.log(`in component: ${count}`);

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
