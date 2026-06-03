import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="max-w-sm mx-auto mt-12 text-center bg-white border border-gray-200 rounded-xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800">Counter App</h1>

      <p className="text-6xl font-bold text-blue-600 my-5">{count}</p>

      {count === 0 && (
        <p className="text-red-600 font-bold mb-4">Minimum limit reached</p>
      )}

      {count === 10 && (
        <p className="text-red-600 font-bold mb-4">Limit over</p>
      )}

      <div className="flex justify-center gap-3">
        <button
          onClick={increment}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-85"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:opacity-85"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:opacity-85"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;