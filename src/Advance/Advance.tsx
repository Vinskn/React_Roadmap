import React, { lazy, Suspense, useCallback, useReducer, useState } from "react";
import Drilling1 from "./components/Drilling1";
import Context1 from "./components/Context1";
import { ColorContext } from "./components/ColorContext";
import CounterReducer from "./reducer/CounterReducer";
import TryCallback from "./components/TryCallback";
import { Link } from "react-router-dom";

// import komponen lazy element --> downloadSimulate contoh untuk waktu download
const Dashboard = lazy(() => downloadSimulate(import("./components/Dashboard")));
const Shop = lazy(() => downloadSimulate(import("./components/Shop")));

const Advance = () => {
    const [color, setColor] = useState<boolean>(false);
    const [color2, setColor2] = useState<boolean>(false)

    // --------------------------------------------------------------------
    // Hook: useReducer
    const [state, dispatch] = useReducer(CounterReducer, {
        count: 0,
        emote: "",
    });

    // --------------------------------------------------------------------
    // Hook: useCallback
    /**
     * Setiap kali terjadi rerender akibat state useCallback log "render happend dipanggil"
     * tapi testLog hanya akan dibuat 1x karena berada di useCallback bukan setiap re-render
     */
    const testLog = useCallback(() => {
        console.log("this child is rendering");
    }, []);

    console.log("render happend");

    const [testCallback, setTestCallback] = useState<boolean>(false);

    // --------------------------------------------------------------------
    // Hook: lazy & suspense
    const [showDashboard, setShowDashboard] = useState<boolean>(false);
    const [showShop, setShowShop] = useState<boolean>(false);

    return (
        <div className="p-10">
            <h1 className="text-5xl font-bold mb-2 mt-5">Advanced React</h1>
            <hr />

            <div>
                <h2 className="text-2xl font-bold mt-5">
                    Drilling & Context API
                </h2>
                {/* Contoh props drilling */}
                {/* skema: parent akan mengirim sebuah props warna text ke child, lalu child akan mengirim props warna text ke grandchild */}

                <div className="mt-3">
                    <Drilling1 color={color} />
                    <button
                        onClick={() => setColor(!color)}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-3"
                    >
                        Change Color
                    </button>
                </div>

                {/* Contoh Context API */}
                {/* skema: parent akan mengirim sebuah props warna text ke grandchild, tanpa harus mengirim props ke child */}
                <div className="mt-3 mb-10">
                    <ColorContext value={color2}>
                        <Context1 />
                    </ColorContext>
                    <button
                        onClick={() => setColor2(!color2)}
                        className="bg-emerald-800 text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 mt-3"
                    >
                        Change Color
                    </button>
                </div>
            </div>

            <hr />
            <div>
                <h2 className="text-2xl font-bold mt-5">Hook: useReducer</h2>
                {/* case: membuat counter tambah dan kurang memakai useReducer */}
                {/* rule: tidak boleh minus, kalau kelipatan 2 tambah emote 🔥 kalau kelipatan 5 tambah emote 💰 */}

                <div className="w-[30%] border border-black p-5 mt-3 flex justify-between items-center mb-10">
                    <button
                        onClick={() => dispatch("add")}
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Tambah
                    </button>
                    <h1>
                        {state.count} {state.emote}
                    </h1>
                    <button
                        onClick={() => dispatch("min")}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Kurang
                    </button>
                </div>
            </div>

            <hr />
            <div className="mb-10">
                <h2 className="text-2xl font-bold mt-5">Hook: useCallback</h2>

                <button
                    onClick={testLog}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-3"
                >
                    Change Color
                </button>

                <button
                    onClick={() => setTestCallback(!testCallback)}
                    className="ml-5 bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 mt-3"
                >
                    Re-render Element
                </button>
            </div>

            <hr />
            <div className="mt-5">
                <h2 className="text-2xl font-bold mt-5">Lazy & Suspense</h2>
                {/* case: akan terdapat komponen dashboard dan shop, keduanya hanya akan di download / import ketika di klik */}
                <button
                    onClick={() => setShowDashboard(!showDashboard)}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-3"
                >
                    Show Dashboard
                </button>
                <button
                    onClick={() => setShowShop(!showShop)}
                    className="ml-5 bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300 mt-3"
                >
                    Show Shop
                </button>

                {/* ketika pertama dipanggil akan menampilkan fallback, setelah selesai baru menampilkan komponen */}
                {showDashboard && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                )}
                {showShop && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Shop />
                    </Suspense>
                )}
            </div>

            <hr />
            <Link to={'dashboard'}>
                <button className="my-10 bg-blue-500 px-5 py-2 rounded-lg text-white">HOC Test</button>
            </Link>

            <hr />
            <Link to={'performance'}>
                <button className="my-10 bg-blue-500 px-5 py-2 rounded-lg text-white">Performance Test</button>
            </Link>

            <hr />
            <Link to={'customHook'}>
                <button className="my-10 bg-blue-500 px-5 py-2 rounded-lg text-white">Custom Hook</button>
            </Link>
        </div>
    );
};

export default Advance;

const downloadSimulate = (promise: Promise<any>) => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
};
