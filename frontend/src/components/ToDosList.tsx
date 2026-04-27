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
    <div className="w-full max-w-4xl h-full overflow-y-auto rounded-2xl scrollbar bg-white w-10">
      <div className="bg-blue-600 sticky top-0 z-0">
        <h2 className="text-white text-xl font-bold mb-4 text-center ">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-center px-4 ">
        {data.map((item) => (
          <ToDoCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex sticky bottom-0 bg-white justify-end-safe right-0">
        <Pagination
          totalPages={10}
          currentPage={1}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </div>
  );
};
