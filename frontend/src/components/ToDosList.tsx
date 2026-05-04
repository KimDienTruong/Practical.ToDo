import { ToDoCard } from "./ToDoCard";
import { Pagination } from "./paginations/Pagination";

type ListItem = {
  id: number;
  title: string;
  description: string;
};

type ListProps = {
  title: string;
  data: ListItem[];
};

export const ToDosList = ({ title, data }: ListProps) => {
  return (
    <div className="grid grid-flow-row grid-rows-3 gap-4 w-full max-w-4xl h-10/12 rounded-2xl bg-white w-10">
      <div className="bg-white sticky top-0 z-0 py-2 px-4 border-b border-gray-300">
        <h2 className="text-black text-xl font-bold mb-4 text-center ">
          {title}
        </h2>
        <div className="flex justify-end px-4 mb-4 h-10 mt-2 space-x-2">
          <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search tasks..."
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-500 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
            />
            <button className="px-3 py-2 rounded transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col row-span-3 items-center px-3 py-2 space-y-4 overflow-y-auto scrollbar">
        {data.map((item) => (
          <ToDoCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex static bottom-0 bg-white justify-end-safe right-0">
        <Pagination
          totalPages={10}
          currentPage={1}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </div>
  );
};
