import { Card } from "../ui/Card";

export function AppointmentCalendar({ selectedDate }) {
  return (
    <Card className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-900">
        Appointment calendar
      </h3>
      <p className="text-sm text-slate-600">Selected date: {selectedDate}</p>
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-xs text-slate-400">
        Calendar UI will be implemented later.
      </div>
    </Card>
  );
}
