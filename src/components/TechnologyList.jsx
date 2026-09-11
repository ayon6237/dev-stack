import React from "react";

const TechnologyList = ({ item ,onAdd}) => {
  const { name, category, description, icon, rating, difficulty, badge } = item;

  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            {badge}
          </span>
        </div>
        <h2 className="card-title mt-2"> {name} </h2>

        <p className="text-sm leading-6 text-black/50"> {description} </p>

        <div className="mt-6 flex items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
            {category}
          </span>
          <span className="text-black/60"> {difficulty} </span>
          <span> ⭐ {rating} </span>
        </div>

        <button className="btn mt-4 w-full bg-black text-white" onClick={()=>onAdd(item)}>
          Add to Stack
        </button>
      </div>
    </div>
  );
};
export default TechnologyList;
