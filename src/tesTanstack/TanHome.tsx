import React, { useState } from "react";
import WithTan from "./WithTan";
import NoTan from "./NoTan";

const TanHome = () => {
    const [isTanstack, setIsTanstack] = useState<boolean>(false);
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Tanstack Query Testing</h1>

            <div className="flex gap-4 pt-5">
                <button onClick={() => setIsTanstack(false)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">No Tanstack</button>
                <button onClick={() => setIsTanstack(true)} className="px-4 py-2 bg-green-500 text-white rounded-lg">With Tanstack</button>
            </div>

            <div className="mt-10">
                {isTanstack ? <WithTan /> : <NoTan />}
            </div>
        </div>
    );
};

export default TanHome;
