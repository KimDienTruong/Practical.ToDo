import { ToDosList } from "../components/ToDosList";
import { data } from "../data/mockData";

export const ToDos = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mt-2">
      <h1 className="text-4xl font-bold mt-4 mb-4">Your ToDos</h1>
      <p className="text-lg text-gray-600 mb-8">
        Here you can manage your tasks and stay organized.
      </p>
      <ToDosList title="My Tasks" data={data} />
    </div>
  );
};
