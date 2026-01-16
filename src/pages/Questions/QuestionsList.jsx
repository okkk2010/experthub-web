import { QuestionCard } from "../../components/domain/QuestionCard";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Pagination } from "../../components/ui/Pagination";

const sampleQuestions = [
  {
    title: "How should I prioritize a product roadmap?",
    category: "Product",
    summary:
      "Looking for a framework to prioritize when resources are limited.",
  },
  {
    title: "Internal alignment for a brand refresh",
    category: "Branding",
    summary: "Need data-backed storytelling to align executives.",
  },
];

export default function QuestionsList() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Questions</h1>
        <p className="text-sm text-slate-600">
          Browse the latest questions and expert answers.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Input placeholder="Search by title or content" />
        <Select className="md:w-48">
          <option>Newest</option>
          <option>Popular</option>
          <option>Unanswered</option>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sampleQuestions.map((question) => (
          <QuestionCard key={question.title} {...question} />
        ))}
      </div>

      <Pagination current={1} total={4} onChange={() => {}} />
    </div>
  );
}
