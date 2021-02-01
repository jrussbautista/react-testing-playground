import { useState } from 'react'


const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }

    return (
        <div>
            <p data-testid="counter">Current Count: {count}</p>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;
