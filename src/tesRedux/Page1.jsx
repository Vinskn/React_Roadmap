import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "./Slicer";

const Page1 = () => {
    const counterVal = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="mt-10">
            <h1 className="text-5xl font-bold mb-5">Page 1</h1>

            <div className="flex items-center">
                <button 
                    onClick={() => dispatch(increment())} 
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg">
                    +
                </button>
                <p className="px-3 font-bold text-2xl">{counterVal}</p>
                <button 
                    onClick={() => dispatch(decrement())} 
                    className="bg-red-500 text-white px-5 py-2 rounded-lg">
                    -
                </button>
            </div>
        </div>
    );
};

export default Page1;
