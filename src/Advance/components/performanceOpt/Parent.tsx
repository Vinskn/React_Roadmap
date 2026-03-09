import React, { useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [ name, setName ] = useState<string>('');
    const [ count, setCount ] = useState<number>(0);
    const [ number, setNumber ] = useState<number>(0);

    const result = useMemo(() => heavyCalc(number), [number]);

    return (
        <div className="p-10">
            <input type="text" onChange={(e) => setName(e.target.value)} className="border-red-500 border-2" />
            <Child name={name} />

            {/* tanpa react memo di child setiap parent re-render maka child akan ikut */}
            {/* ini terlihat dari log yang terus bertambah */}

            <button onClick={() => setCount(count + 1)} className="bg-blue-500 px-5 py-2 rounded-lg text-white mt-8">Increment</button>
            <p>{count}</p>

            {/* kalau ga pakai useMemo maka setiap parent re-render maka heavyCalc akan dihitung ulang */}
            <div className="mt-8">
                <input type="number" onChange={(e) => setNumber(Number(e.target.value))} className="border-red-500 border-2" />
                <p>Result: {result}</p>
            </div>
        </div>
    );
};

export default Parent;

function heavyCalc(num:number) {
    console.log('heavy calc');
    return num * 2;
}