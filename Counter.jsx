import React ,{useState}from "react";

export function Counter() {
const [count, setCount] = usestate(0);
const handleClick = () => {
    setCount=(count + 1);
};
    return(
<div>
    <p>Count: {count}</p>
    <button onClick={handleClick}>increment</button>
</div>
    );
}
