import { Card } from "../../components/ui/Card";
import { Tag } from "../../components/ui/Tag";

export default function MyDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">My dashboard</h1>
        <p className="text-sm text-slate-600">
          Track your questions and appointments in one place.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            My questions
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Awaiting answers</span>
            <Tag>3</Tag>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Answered</span>
            <Tag>5</Tag>
          </div>
        </Card>
        <Card className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            Appointment status
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Pending</span>
            <Tag>2</Tag>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Confirmed</span>
            <Tag>1</Tag>
          </div>
        </Card>
      </div>
    </div>
  );
}
