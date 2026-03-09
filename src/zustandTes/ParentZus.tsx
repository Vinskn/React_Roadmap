import React from "react";
import { useCounter } from "./HookCounter";
import ChildZus1 from "./ChildZus1";
import ChildZus2 from "./ChildZus2";

const ParentZus = () => {
    const increment = useCounter((state) => state.increment);
    const decrement = useCounter((state) => state.decrement);
    return (
        <div className="p-10 my-4 flex flex-col items-center w-full">
            <h1 className="text-4xl font-bold">Parent Zustand</h1>
            <p className="text-2xl font-bold">Counter: {useCounter((state) => state.count)}</p>

            <div className="flex gap-5 ">
                <button onClick={() => increment()} className="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
                <button onClick={() => decrement()} className="bg-red-500 text-white px-4 py-2 rounded">Decrement</button>
            </div>

            <div className="flex justify-between items-center mt-10 w-full">
                <ChildZus1 />
                <ChildZus2 />
            </div>
        </div>
    );
};

export default ParentZus;
