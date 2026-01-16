import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";

export function ExpertCard({ name, headline, tags }) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <div className="text-sm font-semibold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{headline}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Button size="sm">Book appointment</Button>
    </Card>
  );
}
