import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";
import { Badge } from "../ui/Badge";

export function AnswerItem({ expertName, content }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-3">
        <Avatar name={expertName} />
        <div>
          <div className="font-semibold text-slate-900">{expertName}</div>
          <Badge>Expert answer</Badge>
        </div>
      </div>
      <p className="text-sm text-slate-600">{content}</p>
    </Card>
  );
}
