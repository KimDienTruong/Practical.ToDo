import { Badge } from "./Badge";

export const ToDoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white border-r border-b border-l w-full border-gray-400 mb-4 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-2xl p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8 flex flex-col justify-between leading-normal">
        <div className="text-gray-900 font-bold text-xl mb-2 flex flex-row items-center gap-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">{title}</h5>
          <Badge text="In Progress" />
        </div>
        <p className="text-gray-700 text-base text-ellipsis">{description}</p>
      </div>
    </div>
  );
};
