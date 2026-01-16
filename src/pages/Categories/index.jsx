import { Card } from "../../components/ui/Card";

const categories = [
  "Product Strategy",
  "Marketing",
  "Sales",
  "Data",
  "Legal",
  "Design",
  "Finance",
  "Career",
];

export default function Categories() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Categories</h1>
        <p className="text-sm text-slate-600">
          Pick a focus area and explore relevant questions.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Card key={category} className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">
              {category}
            </span>
            <span className="text-xs text-slate-400">View -{'>'}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
