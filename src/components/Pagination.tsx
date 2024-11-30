
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let start = Math.max(1, currentPage - 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    if (start > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="px-3 py-1 rounded-lg hover:bg-gray-100"
        >
          1
        </button>
      );
      if (start > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>
        );
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-lg ${
            currentPage === i
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 rounded-lg hover:bg-gray-100"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-4 overflow-x-auto py-2 px-4 -mx-4">
      <div className="flex items-center space-x-1 min-w-fit">
        
        {renderPageNumbers()}

      </div>
    </div>
  );
}