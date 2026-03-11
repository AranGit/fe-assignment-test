import { TodoItem } from "@/constants/data";

interface TodoGroupProps {
  title: string;
  items: TodoItem[];
  moveBackToMain: (item: TodoItem) => void;
  groupColor?: string;
  buttonClassName?: string;
}

const TodoGroup = ({
  title,
  items,
  moveBackToMain,
  groupColor,
  buttonClassName = "text-black p-3 border bg-white rounded shadow-sm cursor-pointer",
}: TodoGroupProps) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
      <h2
        className={`text-xl font-bold mb-4 text-center text-black py-2 ${groupColor}`}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => moveBackToMain(item)}
            className={buttonClassName}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoGroup;
