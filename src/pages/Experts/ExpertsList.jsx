import { ExpertCard } from "../../components/domain/ExpertCard";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";

const experts = [
  {
    name: "Jungmin Lee",
    headline: "B2B Marketing - 10 years",
    tags: ["Lead gen", "Content", "Funnel"],
  },
  {
    name: "Jihoon Oh",
    headline: "Product leadership - Former CPO",
    tags: ["Roadmap", "Growth", "Org design"],
  },
];

export default function ExpertsList() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Find an expert
        </h1>
        <p className="text-sm text-slate-600">
          Book a 1:1 appointment with a trusted expert.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Input placeholder="Search by name or keyword" />
        <Select className="md:w-48">
          <option>Popular</option>
          <option>Top rated</option>
          <option>Newest</option>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experts.map((expert) => (
          <ExpertCard key={expert.name} {...expert} />
        ))}
      </div>
    </div>
  );
}
