export const PageNumber = ({ page }: { page: number }) => {
  return (
    <a
      href={`/${page}`}
      className="relative inline-flex items-center px-4 py-2 text-sm font-medium hover:bg-white/5 focus:z-20 focus:outline-offset-0"
    >
      {page}
    </a>
  );
};
