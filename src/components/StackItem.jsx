import React from "react";
const StackItem = ({ item,onRemove }) => {
  const { name, category, icon,id } = item;
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="h-8 w-8 object-contain" />
        <div>
          <h3 className="font-medium text-sm"> {name} </h3>
          <p className="text-xs text-black/40"> {category} </p>
        </div>
      </div>

      <button className="text-gray-400 hover:text-red-500" onClick={()=>onRemove(id)}> ✕ </button>
    </div>
  );
};
export default StackItem;
