import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className='counter-component'>
            <h2>{count}</h2>
            <button onClick={increment} style={{ marginBottom: 10, marginRight: 10 }}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;