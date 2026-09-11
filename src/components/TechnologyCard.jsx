import React, { useEffect, useState } from "react";
import TechnologyList from "./TechnologyList";
import YourStack from "./YourStack";

const TechnologyCard = () => {
  const [data, setData] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const addToStack = (item) => { 
    setStack([...stack, item]);
   };

   const removeFromStack = (id) => { 
    setStack(stack.filter((item) => item.id !== id));
   };

  return (
    <div className="max-w-[1200px] mx-auto px-4">

      {/* Heading */}
      <div>
        <h1 className="text-[33px] font-bold">
          Explore the{" "}
          <span className="text-[#EC4899]">Technologies</span>
        </h1>

        <p className="text-black/50">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex gap-6 mt-10">

        {/* Technology Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item) => (
            <TechnologyList
              key={item.id}
              item={item}
              onAdd={addToStack}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div className="w-[300px] shrink-0">
          <YourStack stack={stack} onRemove={removeFromStack}/>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;