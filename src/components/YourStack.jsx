import React from "react";
import StackItem from "./StackItem";
const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold"> Your Stack </h2>
      <p className="mt-1 text-sm text-black/50">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} technologies selected`}
      </p>
      {stack.length === 0 ? (
        <div className="mt-8 text-center text-sm text-black/40">
          <p className="border rounded-2xl p-5 border-dotted">
            Your stack is empty
          </p>
        </div>
      ) : (
        stack.map((item) => (
          <StackItem key={item.id} item={item} onRemove={onRemove} />
        ))
      )}

      {
        stack.length > 0 && <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="btn w-full bg-[#DB2777] text-white"
      >
        Remove All
      </button>
      }
    </div>
  );
};
export default YourStack;
