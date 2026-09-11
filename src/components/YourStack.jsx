import React from "react";
import StackItem from "./StackItem";
const YourStack = ({ stack ,onRemove}) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold"> Your Stack </h2>
      <p className="mt-1 text-sm text-black/50">
        {stack.length} technologies selected
      </p>
      {stack.length === 0 ? (
        <div className="mt-8 text-center text-sm text-black/40">
          <p>Your stack is empty</p>
          <p className="mt-1"> Add technologies to build your stack. </p>
        </div>
      ) : (
        stack.map((item) => <StackItem key={item.id} item={item} onRemove={onRemove} />)
      )}
    </div>
  );
};
export default YourStack;
