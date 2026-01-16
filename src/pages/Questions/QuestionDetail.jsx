import { AnswerItem } from "../../components/domain/AnswerItem";
import { Tag } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";

export default function QuestionDetail() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Tag>Product</Tag>
        <h1 className="text-2xl font-semibold text-slate-900">
          What criteria should I use to reduce MVP scope?
        </h1>
        <p className="text-sm text-slate-600">
          We need to trim the MVP scope to move faster. What criteria should I
          use to prioritize the must-have features?
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Edit question
          </Button>
          <Button size="sm" variant="ghost">
            Delete question
          </Button>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Expert answers
        </h2>
        <AnswerItem
          expertName="Doyun Kim"
          content="Start by identifying the smallest set of features that validate your key hypothesis, then map the critical user journey."
        />
        <AnswerItem
          expertName="Seoyeon Park"
          content="A data-backed prioritization framework helps align stakeholders and make scope cuts clearer."
        />
      </section>
    </div>
  );
}
