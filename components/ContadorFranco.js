"use client";

import React, { useState } from "react";

const Contador = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6 text-white">
            <h1 className="text-2xl font-bold text-black">Contador: {count}</h1>
            <div className="flex gap-3">
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-4 py-2 bg-[#131313] text-white hover:bg-gray-700"
                >
                    +1
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-4 py-2 bg-[#131313] text-white hover:bg-gray-700"
                >
                    -1
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="px-4 py-2 bg-[#131313] text-white hover:bg-gray-700"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
export default Contador;