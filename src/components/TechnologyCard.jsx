import React, { useEffect, useState } from "react";
import TechnologyList from "./TechnologyList";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

const TechnologyCard = () => {
  const [data, setData] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      });
  }, []);

  const addToStack = (item) => {
    const alreadyAdded = stack.some((stackItem) => stackItem.id === item.id);

    if (alreadyAdded) {
      toast.error(`${item.name} is already in your stack!`);
      return;
    }

    setStack([...stack, item]);
    toast.success("Technology added");
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.success("Technology removed");
  };

  const removeAll = () => {
    setStack([]);
    toast.success("All item removed from stack")
  };

   if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div>
        <h1 className="text-[33px] font-bold">
          Explore the <span className="text-[#EC4899]">Technologies</span>
        </h1>

        <p className="text-black/50">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex gap-6 mt-10">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item) => (
            <TechnologyList
              key={item.id}
              item={item}
              onAdd={addToStack}
              stack={stack}
            />
          ))}
        </div>

        <div className="w-[300px] shrink-0">
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
