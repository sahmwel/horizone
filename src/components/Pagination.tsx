import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="inline-flex items-center gap-3 bg-white/60 p-3 rounded-md">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="px-3 py-1 rounded-md border text-sm"
            aria-label="previous"
          >
            ‹
          </button>

          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-3 py-1 rounded-md text-sm border ${p === currentPage ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="px-3 py-1 rounded-md border text-sm"
            aria-label="next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
