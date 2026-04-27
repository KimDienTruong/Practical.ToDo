import { PageNumber } from "./PageNumber";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const leftPageNumbers = [];
  for (let i = currentPage; i <= currentPage + 3; i++) {
    leftPageNumbers.push(i);
  }

  const rightPageNumbers = [];
  for (let i = totalPages - 1; i >= totalPages - 3; i--) {
    if (i > 0) {
      rightPageNumbers.unshift(i);
    }
  }
  return (
    <div className="flex items-center justify-between border-t text-black border-white/10 px-4 py-3 sm:px-6">
      <div className="hidden flex-col items-center sm:flex">
        <div className="">
          <p className="text-sm ">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md"
          >
            <button className="relative inline-flex items-center rounded-l-md px-2 py-2 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <p>Left</p>
            </button>
            {leftPageNumbers.map((number) => (
              <PageNumber key={number} page={number} />
            ))}
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium ">
              ...
            </span>
            {rightPageNumbers.map((number) => (
              <PageNumber key={number} page={number} />
            ))}
            <button className="relative inline-flex items-center rounded-r-md px-2 py-2  inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <p>Right</p>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
