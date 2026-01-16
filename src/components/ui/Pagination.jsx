import { Button } from "./Button";

export function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {pages.map((page) => (
        <Button
          key={page}
          size="sm"
          variant={page === current ? "primary" : "outline"}
          onClick={() => onChange(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
}
