import React from "react";
import { useCounter } from "./HookCounter";

const ChildZus1 = () => {
    const increment = useCounter((state) => state.increment);
    const decrement = useCounter((state) => state.decrement);
    
    return (
        <div>
            <h1 className="text-2xl font-bold">Child Zustand 1</h1>
            <p className="text-xl">Counter in Child 1: {useCounter((state) => state.count)}</p>
            <div className="flex gap-5">
                <button onClick={() => increment()} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
                <button onClick={() => decrement()} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
            </div>
        </div>
    );
};

export default ChildZus1;
