import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 flex flex-col items-center gap-6">
        <h2 className="text-xl font-semibold text-gray-600">Counter App</h2>

        <h1 className="text-6xl font-bold text-indigo-600">{count}</h1>

        {count === 10 && <p className="text-red-500 font-semibold">Limit over!</p>}

        <div className="flex gap-3 w-full">
          <button
            onClick={decrement}
            disabled={count === 0}
            className="flex-1 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 active:scale-95 transition duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            disabled={count === 0}
            className="flex-1 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow hover:bg-gray-600 active:scale-95 transition duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Reset
          </button>

          <button
            onClick={increment}
            disabled={count ===10}
            className="flex-1 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 active:scale-95 transition duration-150 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
