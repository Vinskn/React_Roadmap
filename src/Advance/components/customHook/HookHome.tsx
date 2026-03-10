import React, { useState } from "react";
import { useCount } from "./HookCount";

const HookHome = () => {
    const [arr, setArr] = useState<number[]>([]);
    const [changed, setChanged] = useState<number>(0);
    const [trigger, setTrigger] = useState<boolean>(false);

    const { data, loading, setLoading } = useCount(arr, trigger);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Custom Hook Test</h1>
            <p>Menghitung array</p>

            <p className="mt-5">Array sekarang: {arr.map((e) => `${e} `)}</p>
            <div className="mt-1 flex gap-2">
                <input
                    type="number"
                    className="border border-green-500"
                    onChange={(e) => setChanged(Number(e.currentTarget.value))}
                    value={changed === 0 ? '' : changed}
                />
                <button onClick={() => {setArr([...arr, changed]); setChanged(0);}} className="bg-green-700 px-3 py-1 rounded-lg text-white">
                    Tambah ke Array
                </button>
            </div>

            <button onClick={() => {setTrigger(t => !t); setLoading(true);}} className="bg-blue-500 px-3 py-1 rounded-lg mt-3">
                Hitung
            </button>

            <div className="mt-4">
                {loading ? "Loading..." : `Hasil: ${data}`}
            </div>
        </div>
    );
};

export default HookHome;
