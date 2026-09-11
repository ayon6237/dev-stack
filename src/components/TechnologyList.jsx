import React from "react";

const TechnologyList = ({ item }) => {

  const {id,name,category,description,icon,rating,difficulty,badge} = item
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">


          <div className="flex flex-row justify-between items-center gap-65">
            <img className="w-5" src={icon} alt="" />
            <p>{badge}</p>
          </div>

          <h2 className="card-title">{name}</h2>
          <p className="text-black/40">{description}</p>


          <div className="flex justify-between items-center gap-10 mt-10">
            <p className="bg-blue-100 rounded-3xl px-6 py-1">{category}</p>
            <p>{difficulty}</p>
            <p>{rating}</p>
          </div>

          <div className="card-actions mt-5">
            <button className="btn w-[100%] bg-black btn-primary">Add to stack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyList;
