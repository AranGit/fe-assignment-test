"use client";

import TodoGroup from "@/components/todo/TodoGroup";
import { INITIAL_DATA, TodoItem } from "@/constants/data";
import { useEffect, useRef, useState } from "react";

export default function TodoPage() {
  const [mainList, setMainList] = useState<TodoItem[]>(INITIAL_DATA);
  const [fruitList, setFruitList] = useState<TodoItem[]>([]);
  const [vegList, setVegList] = useState<TodoItem[]>([]);

  const timers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const moveToColumn = (item: TodoItem) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    if (item.type === "Fruit") {
      setFruitList((prev) => [...prev, item]);
    } else {
      setVegList((prev) => [...prev, item]);
    }

    const timer = setTimeout(() => {
      moveBackToMain(item);
    }, 5000);

    timers.current[item.name] = timer;
  };

  const moveBackToMain = (item: TodoItem) => {
    if (timers.current[item.name]) {
      clearTimeout(timers.current[item.name]);
      delete timers.current[item.name];
    }

    setFruitList((prev) => prev.filter((i) => i.name !== item.name));
    setVegList((prev) => prev.filter((i) => i.name !== item.name));

    setMainList((prev) => [...prev, item]);
  };

  useEffect(() => {
    const currentTimers = timers.current;

    return () => {
      Object.values(currentTimers).forEach((timer) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  return (
    <main className="p-8 grid grid-cols-3 gap-4 min-h-screen bg-gray-50">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-4 text-black">Main List</h2>
        {mainList.map((item) => (
          <button
            key={item.name}
            onClick={() => moveToColumn(item)}
            className="text-black p-3 border bg-white hover:bg-blue-200 transition-colors shadow-sm rounded text-left cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>

      <TodoGroup
        title="Fruit"
        items={fruitList}
        moveBackToMain={moveBackToMain}
        groupColor="bg-orange-100"
        buttonClassName="text-black p-3 border bg-white border-orange-300 hover:bg-orange-200 rounded shadow-sm cursor-pointer"
      />
      <TodoGroup
        title="Vegetable"
        items={vegList}
        moveBackToMain={moveBackToMain}
        groupColor="bg-green-100"
        buttonClassName="text-black p-3 border bg-white border-green-300 hover:bg-green-200 rounded shadow-sm cursor-pointer"
      />
    </main>
  );
}
