import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";
import { QuestionCard } from "../../components/domain/QuestionCard";
import { Tag } from "../../components/ui/Tag";

const trendingCategories = [
  "Career",
  "Product",
  "Marketing",
  "Legal",
  "Design",
  "AI",
];

const sampleQuestions = [
  {
    title: "How should I build an early sales strategy for B2B SaaS?",
    category: "Sales",
    summary:
      "Looking for guidance on pipeline setup and lead management for early-stage teams.",
  },
  {
    title: "Maintaining trust during a leadership transition",
    category: "Leadership",
    summary:
      "Need strategies to protect morale and trust after a reorganization.",
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <Tag>Expert Q&A - Appointments - Community</Tag>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Get expert answers and appointments in one place.
          </h1>
          <p className="text-base text-slate-600">
            Ask a question today and connect with verified experts.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input placeholder="Search questions or experts" />
            <Button>Search</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingCategories.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <Card className="space-y-4 bg-slate-900 text-white">
          <h2 className="text-xl font-semibold">Featured expert</h2>
          <p className="text-sm text-slate-200">
            Book an appointment with a trusted expert today.
          </p>
          <div className="space-y-3 rounded-2xl bg-slate-800 p-4">
            <div className="text-sm font-semibold">
              Soyeon Lee - Data Strategy
            </div>
            <div className="text-xs text-slate-300">Former CPO, 12 years</div>
            <Button size="sm" variant="outline">
              Book appointment
            </Button>
          </div>
          <Link to="/experts" className="text-sm text-slate-200 underline">
            Browse experts
          </Link>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Popular questions
          </h2>
          <Link to="/c/all/questions" className="text-sm text-slate-500">
            View all questions
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sampleQuestions.map((question) => (
            <QuestionCard key={question.title} {...question} />
          ))}
        </div>
      </section>
    </div>
  );
}
