import { Card } from "../../components/ui/Card";
import { Tag } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";

export default function ExpertDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Expert dashboard
        </h1>
        <p className="text-sm text-slate-600">
          Manage answer requests and appointment inquiries.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            Answer requests
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">New</span>
            <Tag>4</Tag>
          </div>
          <Button size="sm" variant="outline">
            Manage answers
          </Button>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            Appointment requests
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Pending</span>
            <Tag>2</Tag>
          </div>
          <Button size="sm" variant="outline">
            Manage appointments
          </Button>
        </Card>
      </div>
    </div>
  );
}
