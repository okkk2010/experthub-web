import { Card } from "../ui/Card";
import { Tag } from "../ui/Tag";

export function QuestionCard({ title, category, summary }) {
  return (
    <Card className="space-y-3">
      <div className="flex items-center gap-2">
        <Tag>{category}</Tag>
        <span className="text-xs text-slate-400">Unanswered</span>
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{summary}</p>
    </Card>
  );
}
